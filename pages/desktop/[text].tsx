import type { NextPage } from "next";
import { useRouter } from "next/router";

const TextDesktop: NextPage = () => {
  const { query } = useRouter();
  const { text } = query;
  return <div>{text?.slice(0, 25) + "Desktop"}</div>;
};

export default TextDesktop;
