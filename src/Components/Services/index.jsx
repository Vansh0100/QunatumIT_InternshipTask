import React from "react";
import Button from "react-bootstrap/Button";

function LargeScreen() {
  return (
    <>
      <div className="hidden lg:block  w-full p-2 mt-20" style={{backgroundColor:"rgb(247,252,255)"}}>
        <div className="w-full  text-center">
          <h1 className=" text-6xl mb-4">Our Services</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae
            incidunt qui hic veritatis error, quia quas? <br /> Dignissimos
            pariatur harum distinctio omnis alias,animi temporibus.
          </p>
          <div className="w-full flex justify-center mt-8">
            <div className="flex justify-center  border-red-400 w-3/5 p-3 gap-2">
              <div className="w-1/3 ">
                <div className="flex flex-col   gap-2">
                  <div className="w-full   ">
                    <div className="flex justify-center w-full">
                      <div className="w-16 rounded-full border-2 h-16 relative bottom-7 bg-white">
                        <i
                          class="fa fa-tree"
                          style={{
                            fontSize: "36px",
                            color: "rgb(5,163,232)",
                            paddingTop: "10px",
                          }}
                        ></i>
                      </div>
                    </div>
                  </div>
                  <div className="w-full relative bottom-3  ">
                    <h5>Financial Consulting</h5>
                    <p className="leading-8">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Voluptatibus, error dicta dolores, eligendi nobis
                      obcaecati voluptate perspiciatis veritatis deserunt alias
                      ullam at laborum.{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-1/3 border-1 border-blue-400">
                <div className="flex flex-col   gap-2">
                  <div className="w-full   ">
                    <div className="flex justify-center w-full">
                      <div className="w-16 rounded-full border-2 h-16 relative bottom-7 bg-white">
                        <i
                          class="fa fa-bullhorn"
                          style={{
                            fontSize: "36px",
                            color: "rgb(5,163,232)",
                            paddingTop: "10px",
                          }}
                        ></i>
                      </div>
                    </div>
                  </div>
                  <div className="w-full relative bottom-3">
                    <h5>Content Marketing</h5>
                    <p className="leading-8">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Voluptatibus, error dicta dolores, eligendi nobis
                      obcaecati voluptate perspiciatis veritatis deserunt alias
                      ullam at laborum.{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-1/3 ">
                <div className="flex flex-col   gap-2">
                  <div className="w-full   ">
                    <div className="flex justify-center w-full">
                      <div className="w-16 rounded-full border-2 h-16 relative bottom-7 bg-white">
                        <i
                          class="fa fa-heart"
                          style={{
                            fontSize: "36px",
                            color: "rgb(5,163,232)",
                            paddingTop: "10px",
                          }}
                        ></i>
                      </div>
                    </div>
                  </div>
                  <div className="w-full relative bottom-3  ">
                    <h5>Finance Advice</h5>
                    <p className="leading-8">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Voluptatibus, error dicta dolores, eligendi nobis
                      obcaecati voluptate perspiciatis veritatis deserunt alias
                      ullam at laborum.{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex justify-center">
            <div className="w-1/2 flex justify-center ">
              <div className="w-1/4 ">
                <Button variant="info" className="p-2">
                  All Services
                </Button>
              </div>
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
      <div className="w-full p-2 mt-16 lg:hidden" style={{backgroundColor:"rgb(247,252,255)"}}>
        <div className="w-full  text-center">
          <h1 className=" text-4xl mb-3">Our Services</h1>
          <p className="p-2  m-2">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae
            incidunt qui hic veritatis error, quia quas?
          </p>
          <div className="w-full flex justify-center ">
            <div className="flex flex-col justify-center  border-red-400 w-full p-3 gap-5">
              <div className="w-full">
                <div className="flex flex-col   gap-2">
                  <div className="w-full   ">
                    <div className="flex justify-center w-full">
                      <div className="w-16 rounded-full border-2 h-16 relative bottom-2 bg-white">
                        <i
                          class="fa fa-tree"
                          style={{
                            fontSize: "36px",
                            color: "rgb(5,163,232)",
                            paddingTop: "10px",
                          }}
                        ></i>
                      </div>
                    </div>
                  </div>
                  <div className="w-full   ">
                    <h5>Financial Consulting</h5>
                    <p className="leading-8">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Voluptatibus, error dicta dolores, eligendi nobis
                      obcaecati voluptate perspiciatis veritatis deserunt alias
                      ullam at laborum.{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-2w-full border-1 border-blue-400">
                <div className="flex flex-col   gap-2">
                  <div className="w-full   ">
                    <div className="flex justify-center w-full">
                      <div className="w-16 rounded-full border-2 h-16 relative bottom-7 bg-white">
                        <i
                          class="fa fa-bullhorn"
                          style={{
                            fontSize: "36px",
                            color: "rgb(5,163,232)",
                            paddingTop: "10px",
                          }}
                        ></i>
                      </div>
                    </div>
                  </div>
                  <div className="w-full   ">
                    <h5>Content Marketing</h5>
                    <p className="leading-8">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Voluptatibus, error dicta dolores, eligendi nobis
                      obcaecati voluptate perspiciatis veritatis deserunt alias
                      ullam at laborum.{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full p-2">
                <div className="flex flex-col   gap-2">
                  <div className="w-full   ">
                    <div className="flex justify-center w-full">
                      <div className="w-16 rounded-full border-2 h-16 relative bottom-2 bg-white">
                        <i
                          class="fa fa-heart"
                          style={{
                            fontSize: "36px",
                            color: "rgb(5,163,232)",
                            paddingTop: "10px",
                          }}
                        ></i>
                      </div>
                    </div>
                  </div>
                  <div className="w-full   ">
                    <h5>Finance Advice</h5>
                    <p className="leading-8">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Voluptatibus, error dicta dolores, eligendi nobis
                      obcaecati voluptate perspiciatis veritatis deserunt alias
                      ullam at laborum.{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex justify-center">
            <div className="w-1/4 flex justify-center ">
              <div className=" ">
                <Button variant="info">All Services</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function Services() {
  return (
    <>
      <SmallScreen />
      <LargeScreen />
    </>
  );
}

export default Services;
