import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./ProductDetail.css";
import { getProductDetailItem, getProductDetailComments } from "../api";

import backIcon from "../../../assets/ic_back.svg";
import ProductDetailInfo from "./ProductDetailInfo";
import ProductDetailInquiry from "./ProductDetailInquiry";
import ProductDetailComments from "./ProductDetailComments";

const ProductDetail = () => {
  const { id } = useParams();
  const [detailItem, setDetailItem] = useState([]);
  const [comments, setComments] = useState([]);
  const [inquiryValue, setInquiryValue] = useState("");

  useEffect(() => {
    const getProductDetail = async () => {
      const item = await getProductDetailItem(id);
      const comment = await getProductDetailComments(id);
      setDetailItem(item);
      setComments(comment);
    };

    getProductDetail();
  }, []);

  return (
    <div className="product-container">
      <ProductDetailInfo detailItem={detailItem} />
      <ProductDetailInquiry
        inquiryValue={inquiryValue}
        setInquiryValue={setInquiryValue}
      />
      <ProductDetailComments comments={comments} />
      <Link
        to="/items"
        className={`product-back-link ${
          comments.list?.length ? "" : "margin-top"
        }`}
      >
        <button type="button" className="product-back-btn">
          <span>목록으로 돌아가기</span>
          <img src={backIcon} alt="뒤로가기아이콘" />
        </button>
      </Link>
    </div>
  );
};

export default ProductDetail;
