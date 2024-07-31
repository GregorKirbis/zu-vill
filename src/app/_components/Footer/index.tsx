import type { Footer } from "../../../payload/payload-types";
import { fetchFooter } from "../../_api/fetchGlobals";
import { FooterNav } from './Nav'


export async function Footer() {

  let footer: Footer | null = null;

  try {
    footer = await fetchFooter();

    console.log(footer);

  } catch (error) {

    console.error(error);


  }

  return (<FooterNav footer={footer} />);
};
