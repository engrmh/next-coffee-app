import React from "react";
import ServicesDetails from "@/components/templates/Services/ServicesDetails";
import PageHeader from "@/components/modules/PageHeader/PageHeader";

function Services({services}) {
  return (
      <>
        <PageHeader route={'Services'}/>
        <ServicesDetails data={services}/>
      </>
  );
}

export async function getStaticProps(context){
  const res = await fetch('http://localhost:4000/services')
  const services = await res.json()

  return {
    props:{
      services
    }
  }
}

export default Services;
