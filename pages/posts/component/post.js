import React from "react";
import Link from "next/link";
import styles from "./Post.module.css";
import styled from "styled-components";

export const Body = styled.p({
  fontSize: "18px",
  marginTop: "10px",
  color: "darkgreen",
});

const Post = ({ id, title, body }) => {
  return (  
    <>
      <h3 className={styles.postHeading}>
        <Link href="/post/[id]" as={"/post/" + id}>
          <a>{title}</a>
        </Link>
      </h3>
      <Body>{body}</Body>
    </>
  );
};

export default Post;
