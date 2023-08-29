import Head from "next/head";
import Link from "next/link";
import parseHtml, { domToReact } from "html-react-parser";
import get from "lodash/get";
import React from "react";

// Determines if URL is internal or external
function isUrlInternal(link) {
  if (
    !link ||
    link.indexOf(`https:`) === 0 ||
    link.indexOf(`#`) === 0 ||
    link.indexOf(`http`) === 0 ||
    link.indexOf(`://`) === 0
  ) {
    return false;
  }
  return true;
}

// Replaces DOM nodes with React components
function replace(node) {
  const attribs = node.attribs || {};

  // Replace links with Next links
  if (node.name === `a` && isUrlInternal(attribs.href)) {
    const { href, style, ...props } = attribs;
    if (props.class) {
      props.className = props.class;
      delete props.class;
    }
    if (!style) {
      return (
        <Link href={href}>
          <a {...props}>
            {!!node.children &&
              !!node.children.length &&
              domToReact(node.children, parseOptions)}
          </a>
        </Link>
      );
    }
    return (
      <Link href={href}>
        <a {...props} href={href} css={style}>
          {!!node.children &&
            !!node.children.length &&
            domToReact(node.children, parseOptions)}
        </a>
      </Link>
    );
  }

  // Make Google Fonts scripts work
  if (node.name === `script`) {
    let content = get(node, `children.0.data`, ``);
    if (content && content.trim().indexOf(`WebFont.load(`) === 0) {
      content = `setTimeout(function(){${content}}, 1)`;
      return (
        <script
          {...attribs}
          dangerouslySetInnerHTML={{ __html: content }}
        ></script>
      );
    }
  }
}
const parseOptions = { replace };

export default function Home(props) {
  return (
    <>
      <Head>{parseHtml(props.headContent, parseOptions)}</Head>
      {parseHtml(props.bodyContent, parseOptions)}
    </>
  );
}


// Helper function to fetch and parse HTML
async function fetchAndParseHTML(url) {
  const cheerio = await import(`cheerio`);
  const axios = (await import(`axios`)).default;

  const res = await axios(url);
  const html = res.data;

  // Parse HTML with Cheerio
  const $ = cheerio.load(html);

  // Convert back to HTML strings
  const bodyContent = $(`body`).html();
  const headContent = $(`head`).html();

  return { bodyContent, headContent };
}

// This function should be deprecated because we are not using webflow anymore
export async function getServerSideProps(ctx) {
  // This is a partial fix for 404s
  const { bodyContent, headContent } = await fetchAndParseHTML('https://nuwe.io/404');
  return {
    props: {
      bodyContent,
      headContent,
    }
  }
}
