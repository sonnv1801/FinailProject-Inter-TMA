import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import MediaCard from '../../../components/cards/Card';
import Card from '../../../components/cards/Card';
import NavProduct from '../../../components/navproduct/NavProduct';
import {
  filledProduct,
  getProductType,
} from '../../../redux/actions/product.action';
import { BodyProduct } from './bodyproduct/BodyProduct';
import { MenuShop } from './menushop/MenuShop';
import './style.css';
const Shop = () => {
  const location = useLocation();
  const listProductType = useSelector(
    (state) => state.defaultReducer.listProductType
  );
  const fillPrice = useSelector((state) => state.defaultReducer.fillPrice);
  const isLoading = useSelector((state) => state.defaultReducer.isLoading);
  const type = location.pathname.split('/')[2];
  const limit = 100;
  const filled = location.pathname.split('/')[3];
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductType(type, limit));
  }, []);
  useEffect(() => {
    dispatch(filledProduct(type, filled));
  }, []);
  return (
    <>
      <NavProduct />
      <div className="shop-container">
        <MenuShop typeShop={listProductType} />
        <BodyProduct />

        {isLoading ? (
          <>
            <div
              class="spinner-border"
              role="status"
              style={{ position: 'relative', left: '50%' }}
            >
              <span class="visually-hidden">Loading...</span>
            </div>
          </>
        ) : (
          <div className="shop-product">
            <div className="row">
              {filled ? (
                <>
                  <div
                    className="container-content"
                    style={{ margin: '0', marginBottom: '5px' }}
                  >
                    <h1>Danh Sách Lọc Theo Giá</h1>
                  </div>
                  {fillPrice.map((item, index) => (
                    <div className="col-3 mb-2">
                      <MediaCard card={item} />
                    </div>
                  ))}
                </>
              ) : (
                <>
                  <div
                    className="container-content"
                    style={{ margin: '0', marginBottom: '5px' }}
                  >
                    <h1>Danh Sách Sản Phẩm</h1>
                  </div>
                  {listProductType.map((item, index) => (
                    <div className="col-3 mb-2">
                      <MediaCard card={item} />
                    </div>
                  ))}
                </>
              )}
            </div>
          </div>
        )}
        <div className="see-more">
          <button>
            <Link to="/">Xem thêm</Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default Shop;
