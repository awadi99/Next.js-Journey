
import ProductList from '@/app/searchparamsclient/page';
import React from 'react';

export default function Page({ searchParams }) {
  const category = searchParams?.category || "all";
  const sort = searchParams?.sort || "default";
  const page = searchParams?.page || 1;

  return (
    <div>
      <ProductList/>
      Showing {category} products, sorted by {sort}, page {page}
    </div>
  );
}
