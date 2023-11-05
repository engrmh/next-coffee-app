import React from "react";
import PageHeader from "@/components/modules/PageHeader/PageHeader";
import Testimonials from "@/components/templates/Index/Testimonials";

function Testimonial({comments}) {
  return (
      <>
        <PageHeader route={'Testimonial'}/>
        <Testimonials data={comments}/>
      </>
  );
}

export async function getStaticProps() {
    const res = await fetch("http://localhost:4000/comments");
    const comments = await res.json();

    return {
        props: {
            comments
        },
        revalidate: 60 * 60 * 12, // Second
    };
}


export default Testimonial;
