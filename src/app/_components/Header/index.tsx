import type { Header } from "../../../payload/payload-types";
import { fetchHeader } from "../../_api/fetchGlobals";
import { HeaderNav } from './Nav'


export async function Header() {

  let header: Header | null = null;

  try {
    header = await fetchHeader();

  } catch (error) {}

  return (<HeaderNav header={header} />);
};
