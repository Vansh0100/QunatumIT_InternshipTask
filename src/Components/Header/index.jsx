import React from "react";
import twitter from "../../images/twitter.png";
import facebook from "../../images/facebook.png";
import linkedin from "../../images/linkedin.png";
import telegram from "../../images/telegram.png";

function LargeScreen() {
  return (
    <>
      <div className="hidden md:flex w-full text-center  p-2">
        <div className="w-3/5 flex  justify-center text-white">
          <div className=" border-r-2">
            <p className="mr-2 mb-2">
              <i
                class="fa fa-heart"
                style={{ color: "white", paddingRight: "5px" }}
              ></i>
              We are open 24x7
            </p>
          </div>
          <div className="ml-2">
            <i
              class="fa fa-envelope"
              style={{ color: "white", paddingRight: "5px" }}
            ></i>
            www.gmail.com
          </div>
        </div>
        <div className="w-2/5 flex   ">
          <div className="flex w-full justify-center   gap-2">
            <div>
              <a href="#">
                <img src={twitter} alt="" className="rounded-full w-8" />
              </a>
            </div>
            <div>
              <a href="#">
                <img src={facebook} alt="" className="rounded-full w-8" />
              </a>
            </div>
            <div>
              <a href="#">
                <img src={linkedin} alt="" className="rounded-full w-8" />
              </a>
            </div>
            <div>
              <a href="#">
                <img src={telegram} alt="" className="rounded-full w-8" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
function SmallScreen() {
  return (
    <>
      <div className="flex w-full text-center  p-2 md:hidden">
        <div className="w-3/5 flex  justify-center text-white">
          <div className=" border-r-2">
            <p className="mr-2 mb-2">
              <i
                class="fa fa-heart"
                style={{ color: "white", paddingRight: "5px" }}
              ></i>
              We are open 24x7
            </p>
          </div>
          <div className="ml-2">
            <i
              class="fa fa-envelope"
              style={{ color: "white", paddingRight: "5px" }}
            ></i>
            www.gmail.com
          </div>
        </div>
        <div className="w-2/5 flex   ">
          <div className="flex w-full justify-center   gap-2">
            <div>
              <a href="#">
                <img src={twitter} alt="" className="rounded-full w-8" />
              </a>
            </div>
            <div>
              <a href="#">
                <img src={facebook} alt="" className="rounded-full w-8" />
              </a>
            </div>
            <div>
              <a href="#">
                <img src={linkedin} alt="" className="rounded-full w-8" />
              </a>
            </div>
            <div>
              <a href="#">
                <img src={telegram} alt="" className="rounded-full w-8" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function Header() {
  return (
    <>
      <div style={{ backgroundColor: "rgb(5,163,232)" }}>
        <LargeScreen />
        <SmallScreen />
      </div>
    </>
  );
}

export default Header;
