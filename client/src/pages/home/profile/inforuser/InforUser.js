import React from "react";
import "./style.css";
function InforUser() {
  return (
    <div className="info-container">
      <div className="title-infor">Thông tin khách hàng</div>
      <form className="group-container">
        <div className="form-group">
          <label>Họ và tên</label>
          <input
            type="text"
            name="name"
            className="name"
            value="Nguyễn Phi Líp"
            placeholder="Họ và tên..."
            required=""
            data-metatip="true"
          ></input>
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="text"
            name="email"
            className="email"
            value="philipkaka2001@gmail.com"
            placeholder="Email..."
            required=""
            readonly=""
          ></input>
          <a
            className="btn btn-danger"
            href="/notfound"
            style={{ marginLeft: "15px" }}
          >
            Thay đổi
          </a>
        </div>
        <div className="form-group">
          <label>Số điện thoại</label>
          <input
            type="text"
            name="phone"
            className="phone"
            value="0869176474"
            placeholder="(+84) 987654321"
            readonly=""
          ></input>
          <a
            className="btn btn-danger"
            href="/notfound"
            style={{ marginLeft: "15px" }}
          >
            Thay đổi
          </a>
        </div>
        <div className="form-group">
          <label>Địa chỉ</label>
          <input
            type="text"
            name="address"
            className="address"
            value="546/25 Tôn Đản, Cẩm Lệ, Đà Nẵng"
            placeholder="Số nhà, Đường, Quận, TP"
            readonly=""
          ></input>
          <a
            className="btn btn-danger"
            href="/notfound"
            style={{ marginLeft: "15px" }}
          >
            Thay đổi
          </a>
        </div>
        <div className="form-group">
          <label>Giới tính</label>
          <input
            type="radio"
            name="gender"
            className="gender"
            value="1"
            checked=""
          ></input>
          <span>Nam</span>
          <input
            type="radio"
            name="gender"
            className="gender"
            value="2"
            checked=""
          ></input>
          <span>Nữ</span>
          <input
            type="radio"
            name="gender"
            className="gender"
            value="0"
            checked=""
          ></input>
          <span>Khác</span>
        </div>
        <div className="form-group">
          <label>Ngày sinh</label>
          <div className="birthday-infor">
            <div className="select">
              <select name="date" id="date">
                <option value="01">01</option>
                <option value="02">02</option>
                <option value="03" selected="">
                  03
                </option>
                <option value="04">04</option>
                <option value="05">05</option>
                <option value="06">06</option>
                <option value="07">07</option>
                <option value="08">08</option>
                <option value="09">09</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="13">13</option>
                <option value="14">14</option>
                <option value="15">15</option>
                <option value="16">16</option>
                <option value="17">17</option>
                <option value="18">18</option>
                <option value="19">19</option>
                <option value="20">20</option>
                <option value="21">21</option>
                <option value="22">22</option>
                <option value="23">23</option>
                <option value="24">24</option>
                <option value="25">25</option>
                <option value="26">26</option>
                <option value="27">27</option>
                <option value="28">28</option>
                <option value="29">29</option>
                <option value="30">30</option>
                <option value="31">31</option>
              </select>
            </div>
            <div className="select">
              <select
                name="month"
                id="month"
                data-metatip="true"
                data-selected="true"
                data-label-id="0"
              >
                <option value="01">Tháng 1</option>
                <option value="02">Tháng 2</option>
                <option value="03" selected="">
                  Tháng 3
                </option>
                <option value="04">Tháng 4</option>
                <option value="05">Tháng 5</option>
                <option value="06">Tháng 6</option>
                <option value="07">Tháng 7</option>
                <option value="08">Tháng 8</option>
                <option value="09">Tháng 9</option>
                <option value="10">Tháng 10</option>
                <option value="11">Tháng 11</option>
                <option value="12">Tháng 12</option>
              </select>
            </div>
            <div className="select">
              <select
                name="year"
                id="year"
                data-selected="true"
                data-label-id="0"
                data-metatip="true"
              >
                <option value="2023">2023</option>
                <option value="2022">2022</option>
                <option value="2021">2021</option>
                <option value="2020">2020</option>
                <option value="2019">2019</option>
                <option value="2018">2018</option>
                <option value="2017">2017</option>
                <option value="2016">2016</option>
                <option value="2015">2015</option>
                <option value="2014">2014</option>
                <option value="2013">2013</option>
                <option value="2012">2012</option>
                <option value="2011">2011</option>
                <option value="2010">2010</option>
                <option value="2009">2009</option>
                <option value="2008">2008</option>
                <option value="2007">2007</option>
                <option value="2006">2006</option>
                <option value="2005">2005</option>
                <option value="2004">2004</option>
                <option value="2003">2003</option>
                <option value="2002">2002</option>
                <option value="2001" selected="">
                  2001
                </option>
                <option value="2000">2000</option>
                <option value="1999">1999</option>
                <option value="1998">1998</option>
                <option value="1997">1997</option>
                <option value="1996">1996</option>
                <option value="1995">1995</option>
                <option value="1994">1994</option>
                <option value="1993">1993</option>
                <option value="1992">1992</option>
                <option value="1991">1991</option>
                <option value="1990">1990</option>
                <option value="1989">1989</option>
                <option value="1988">1988</option>
                <option value="1987">1987</option>
                <option value="1986">1986</option>
                <option value="1985">1985</option>
                <option value="1984">1984</option>
                <option value="1983">1983</option>
                <option value="1982">1982</option>
                <option value="1981">1981</option>
                <option value="1980">1980</option>
                <option value="1979">1979</option>
                <option value="1978">1978</option>
                <option value="1977">1977</option>
                <option value="1976">1976</option>
                <option value="1975">1975</option>
                <option value="1974">1974</option>
                <option value="1973">1973</option>
              </select>
            </div>
          </div>
        </div>
        <div className="form-group-foot">
          <button>Cập nhật</button>
        </div>
      </form>
    </div>
  );
}

export default InforUser;
