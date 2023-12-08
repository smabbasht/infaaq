/*
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import React, { useState, useEffect } from "react";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";

// Material Kit 2 React components
import TransparentBlogCard from "examples/Cards/BlogCards/TransparentBlogCard";
import BackgroundBlogCard from "examples/Cards/BlogCards/BackgroundBlogCard";

// Images
import post1 from "assets/images/examples/testimonial-6-2.jpg";
import post2 from "assets/images/examples/testimonial-6-3.jpg";
import post3 from "assets/images/examples/blog-9-4.jpg";
import post4 from "assets/images/examples/blog2.jpg";

const EventCard = (
  title,
  description,
  date,
  image //props: name, description, date
) => {
  // const title_crop = title.slice(0, 10);
  // const desc = description.slice(0, 50);

  return (
    
      <TransparentBlogCard
        image={image}
        title={title}
        description={description}
        // date={date}
        action={{
          type: "internal",
          route: "/pages/blogs/author/pages/landing-pages/show-event",
          color: "info",
          label: "read more",
        }}
      />
  );
};

function Places() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:8000/events/api/")
      .then((response) => response.json())
      .then((data) => {
        setItems(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  console.log(items.title);

  return (
    <MKBox component="section" py={2}>
      <Container>
        <Grid container item xs={12} lg={6}>
          <MKTypography variant="h3" mb={6}>
            Events Happening
          </MKTypography>
        </Grid>
        <Grid container spacing={3}>
            {items.map((item) => (
              <Grid item xs={12} sm={6} lg={3}>
                {EventCard(item.title, item.description, item.date, item.image)}
              </Grid>
            ))}
          </Grid>
      </Container>
    </MKBox>
  );
}

export default Places;
