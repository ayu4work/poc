import React, { useEffect } from "react";
import { getUsers } from "../../redux/actions/users";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import "./usersComp.css";

const DetailsAboutItem = (props) => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();

  const name = searchParams.get("itemName");

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  const itemDetail = JSON.parse(localStorage.getItem(name));
  return (
    <div className="details">
      <h2>This is details page!</h2>
      <p>{itemDetail?.name}</p>
      <p>{itemDetail?.country}</p>
      <p>{itemDetail?.alpha_two_code}</p>
      <p>{itemDetail?.domains?.map((domainName) => domainName)}</p>
      <p>{itemDetail?.web_pages?.map((web) => web)}</p>
    </div>
  );
};

export default DetailsAboutItem;
