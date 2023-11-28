/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import Layout from './../components/Layout/Layout';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import '../styles/ProductDetailsStyles.css';

const ProductDetails = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState({});
  const [relatedProducts, setRelatedProducts] = useState([]);

  //initalp details
  useEffect(() => {
    if (params?.slug) getProduct();
  }, [params?.slug]);
  //getProduct
  const getProduct = async () => {
    try {
      const { data } = await axios.get(
        `/api/v1/product/get-product/${params.slug}`
      );
      setProduct(data?.product);
      getSimilarProduct(data?.product._id, data?.product.category._id);
    } catch (error) {
      console.log(error);
    }
  };
  //get similar product
  const getSimilarProduct = async (pid, cid) => {
    try {
      const { data } = await axios.get(
        `/api/v1/product/related-product/${pid}/${cid}`
      );
      setRelatedProducts(data?.products);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <div className="fluid-container ">
        <div className="row product-details">
          <div className="col-md-6  col-sm-5" id="productimgdiv">
            <img
              src={`/api/v1/product/product-photo/${product._id}`}
              className="mainImage"
              alt={product.name}
            />
          </div>
          <div className="col-md-6 col-sm-7 product-details-info">
            <h1 className="text-center" style={{ color: '#e79737' }}>
              Product Details
            </h1>
            <hr />
            <h6 className="details">
              <span style={{ color: '#e79737' }}>Name :</span> {product.name}
            </h6>
            <h6 className="details">
              {' '}
              <span style={{ color: '#e79737' }}>Description :</span>{' '}
              {product.description}
            </h6>
            <h6 className="details">
              <span style={{ color: '#e79737' }}> Price :</span>
              {product?.price?.toLocaleString('en-RS', {
                style: 'currency',
                currency: 'PKR',
              })}
            </h6>
            <h6 className="details">
              {' '}
              <span style={{ color: '#e79737' }}>Category :</span>{' '}
              {product?.category?.name}
            </h6>
            <button class="btn  DetailAddcart ">ADD TO CART</button>
          </div>
        </div>
      </div>
      <hr />
      {/* <div className="row container similar-products">
        <h4 className="similarText">Similar Products ➠</h4>
        {relatedProducts.length < 1 && (
          <p className="text-center">No Similar Products found</p>
        )}
        <div className="d-flex ">
          {relatedProducts?.map((p) => (
            <div
              className="card m-2 col-lg-3 col-md-4 col-sm-6"
              key={p._id}
              id="similarproductsize"
            >
              <img
                src={`/api/v1/product/product-photo/${p._id}`}
                className="card-img-top"
                alt={p.name}
              />
              <div className="card-body">
                <div className="card-name-price">
                  <h5 className="card-title">{p.name}</h5>
                  <h5 className="card-title card-price">
                    {p.price.toLocaleString('en-RS', {
                      style: 'currency',
                      currency: 'PKR',
                    })}
                  </h5>
                </div>
                <p className="card-text">{p.description.substring(0, 60)}...</p>
                <div className="card-name-price">
                  <button
                    className="btn MoreDetailsProduct"
                    onClick={() => navigate(`/product/${p.slug}`)}
                  >
                    More Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div> */}
    </Layout>
  );
};

export default ProductDetails;
