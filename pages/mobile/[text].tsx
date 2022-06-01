import type { NextPage } from "next";
import { useRouter } from "next/router";

const Text: NextPage = () => {
  const { query } = useRouter();
  const { text } = query;
  return <div>{text?.slice(0, 25) + "Mobile"}</div>;
};

export default Text;
