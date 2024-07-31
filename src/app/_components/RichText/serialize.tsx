import React, { Fragment } from "react";
import escapeHTML from "escape-html";
import { Text } from "slate";
import { Label } from "../Label";
import { LargeBody } from "../LargeBody";
import { CMSLink } from "../Link";

// eslint-disable-next-line no-use-before-define
type Children = Leaf[];

type Leaf = {
  type: string;
  value?: {
    url: string;
    alt: string;
  };
  children?: Children;
  url?: string;
  [key: string]: unknown;
};

const serialize = (children?: Children): React.ReactNode[] =>
  children?.map((node, i) => {
    if (Text.isText(node)) {
      // Split the text on page breaks
      const segments = node.text.split('\n').map((segment, index) => {
        let text = <span key={index} dangerouslySetInnerHTML={{ __html: escapeHTML(segment) }} />;

        if (node.bold) {
          text = <strong key={index}>{text}</strong>;
        }

        if (node.code) {
          text = <code key={index}>{text}</code>;
        }

        if (node.italic) {
          text = <em key={index}>{text}</em>;
        }

        if (node.underline) {
          text = (
            <span style={{ textDecoration: "underline" }} key={index}>
              {text}
            </span>
          );
        }

        if (node.strikethrough) {
          text = (
            <span style={{ textDecoration: "line-through" }} key={index}>
              {text}
            </span>
          );
        }

        // Add a <br> element after each segment except the last one
        return (
          <Fragment key={index}>
            {text}
            {index < node.text.split('\n').length - 1 && <br />}
          </Fragment>
        );
      });

      return <Fragment key={i}>{segments}</Fragment>;
    }

    if (!node) {
      return null;
    }

    switch (node.type) {
      case "h1":
        return <h1 key={i}>{serialize(node?.children)}</h1>;
      case "h2":
        return <h2 key={i}>{serialize(node?.children)}</h2>;
      case "h3":
        return <h3 key={i}>{serialize(node?.children)}</h3>;
      case "h4":
        return <h4 key={i}>{serialize(node?.children)}</h4>;
      case "h5":
        return <h5 key={i}>{serialize(node?.children)}</h5>;
      case "h6":
        return <h6 key={i}>{serialize(node?.children)}</h6>;
      case "quote":
        return <blockquote key={i}>{serialize(node?.children)}</blockquote>;
      case "ul":
        return <ul key={i}>{serialize(node?.children)}</ul>;
      case "ol":
        return <ol key={i}>{serialize(node.children)}</ol>;
      case "li":
        return <li key={i}>{serialize(node.children)}</li>;
      case "link":
        return (
          <CMSLink key={i} type={node.linkType === "internal" ? "reference" : "custom"} url={node.url} reference={node.doc as any} newTab={Boolean(node?.newTab)}>
            {serialize(node?.children)}
          </CMSLink>
        );

      case "label":
        return <Label key={i}>{serialize(node?.children)}</Label>;

      case "large-body": {
        return <LargeBody key={i}>{serialize(node?.children)}</LargeBody>;
      }

      default:
        return <p key={i}>{serialize(node?.children)}</p>;
    }
  }) || [];

export default serialize;
