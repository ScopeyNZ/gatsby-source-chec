import React from 'react';
import { graphql, Link } from 'gatsby';

import ProductList from '../components/ProductList';

export default function IndexPage({
  data: { merchant, products, categories },
}) {
  return (
    <React.Fragment>
      <h1>{merchant.name}</h1>

      <h3>Categories</h3>

      <ul>
        {categories.nodes.map(({ name, slug }) => (
          <li key={slug}>
            <Link to={`/categories/${slug}`}>{name}</Link>
          </li>
        ))}
      </ul>

      <h3>Products</h3>

      <ProductList products={products.nodes} />
    </React.Fragment>
  );
}

export const pageQuery = graphql`
  {
    merchant: checMerchant {
      name: business_name
    }

    categories: allChecCategory {
      nodes {
        name
        slug
      }
    }

    products: allChecProduct {
      nodes {
        name
        permalink
        price {
          formatted_with_symbol
        }
      }
    }
  }
`;
