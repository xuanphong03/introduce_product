import React, { useEffect, useMemo, useState } from "react";
import PropTypes from "prop-types";
import ProductFilter from "./components/ProductFilter";
import { useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";
import ProductItem from "./components/ProductItem";
import productApi from "../../../apis/productApi";
import FilterViewer from "./components/Filters/FilterViewer";
import { Box, Pagination } from "@mui/material";
import { useSelector } from "react-redux";

ProductUser.propTypes = {};

function ProductUser(props) {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = useMemo(() => {
    const params = queryString.parse(location.search);
    return {
      ...params,
      _page: Number.parseInt(params._page) || 1,
      _limit: Number.parseInt(params._limit) || 12,
    };
  }, [location.search]);

  const [productList, setProductList] = useState([]);
  // const [fetched, setFetched] = useState(false);
  const [loading, setLoading] = useState(true);

  const [pagination, setPagination] = useState({
    page: 1,
    limit: 10,
    total: 10,
  });

  useEffect(() => {
    (async () => {
      try {
        const { data } = await productApi.getAll(queryParams);
        setProductList(data);
        // setFetched(true);
        window.scrollTo(0, 0);
      } catch (error) {
        console.log("Error: ", error);
      }
      setLoading(false);
    })();
  }, [queryParams]);

  const handlePageChange = (event, page) => {
    const filters = {
      ...queryParams,
      _page: page,
    };
    navigate(`/?${queryString.stringify(filters)}`);
  };

  const handleFiltersChange = (newFilters) => {
    const filters = {
      ...queryParams,
      ...newFilters,
    };
    navigate(`/?${queryString.stringify(filters)}`);
  };

  const setNewFilters = (newFilters) => {
    navigate(`/?${queryString.stringify(newFilters)}`);
  };

  const handleAddToCard = () => {};

  const { product_list } = useSelector((state) => state.products);
  console.log(product_list);

  return (
    <div className="pt-[var(--height-header)] grid grid-cols-12 gap-6 mx-6 mt-6">
      <div className="col-span-3">
        <ProductFilter filters={queryParams} onChange={handleFiltersChange} />
      </div>
      <div className="col-span-9  bg-slate-300 px-4 py-2 rounded">
        <div className="flex">
          <FilterViewer filters={queryParams} onChange={setNewFilters} />
        </div>
        <div className="mt-2 grid grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-x-3 gap-y-5 ">
          {product_list.map((product) => {
            return <ProductItem key={product.id} product={product} />;
          })}
        </div>
        <Box
          sx={{
            display: "flex",
            flexGrow: "row nowrap",
            justifyContent: "center",
            marginTop: "20px",
            paddingBottom: "12px",
          }}
        >
          <Pagination
            count={Math.ceil(pagination.total / pagination.limit)}
            page={pagination.page}
            onChange={handlePageChange}
            color="primary"
            variant="outlined"
            shape="rounded"
          />
        </Box>
      </div>
    </div>
  );
}

export default ProductUser;
