import "./App.scss";
import Navbar from "./components/Navbar";
import { Container, Row, Col } from "reactstrap";
import { FiAlertTriangle } from "react-icons/fi";

function App() {
  return (
    <>
      <Navbar />
      <Container fluid>
        <Row>
          <Col md={12} className="text-center text-white py-2 fs-6">
            <p className="mb-0">
              The Degen L3 chain is coming soon! EVM compatible, low transaction
              fees, built for Degens!
            </p>
          </Col>
          <Row className="contentWrapper px-md-5 py-md-5 px-3 py-5 m-0">
            <Col md={12} className="contentDiv p-md-5 p-4">
              <p className="mb-0 headingText">Liquidity Mining</p>
              <p className="bg-transparent text-white pt-2 descriptionText">
                Earn points by contributing liquidity to our{" "}
                <span className="bg-transparent spanColor">
                  Uniswap V3 DEGEN/WETH pool
                </span>
                , which features a 0.3% fee tier. There's no need to lock LP
                NFTs. You will earn points based on the amount of liquidity you
                provide and its alignment with the current price range. The next
                opportunity to claim points is April 11, 2024.
              </p>
              <div className="alertDiv mt-4">
                <p className="text-white px-3 py-3 mb-0">
                  <span className="bg-transparent">
                    <FiAlertTriangle
                      color="#ffffff"
                      className="bg-transparent mx-2"
                    />
                  </span>
                  Adding liquidity to a pool comes with the risk of impermanent
                  loss!
                </p>
              </div>
            </Col>

            <Col md={12} className="contentDiv p-md-5 p-4 mt-5">
              <p className="mb-0 headingText">Claim</p>
              <p className="bg-transparent text-white pt-4 descriptionText text-center mb-0">
                Connect your wallet to claim your rewards!
              </p>
              <p className="bg-transparent text-white pt-4 descriptionText text-center">
                Liquidity Mining Season 1 rewards can be claimed until April 11,
                2024.
              </p>
            </Col>

            <Col md={12} className="contentDiv p-md-5 p-4 mt-5">
              <p className="mb-0 headingText">Leaderboard</p>
              <div className="d-flex justify-content-between bg-transparent fs-6 tableHeader mt-4 p-3">
                <p className="fw-bold mb-0 bg-transparent">User</p>
                <p className="fw-bold mb-0 bg-transparent">Points</p>
              </div>
              <div className="d-flex justify-content-between bg-transparent fs-6 tableRowTransparent p-3">
                <p className="fw-bold mb-0 bg-transparent">welp 🌸</p>
                <p className="fw-bold mb-0 bg-transparent">15,044,452</p>
              </div>
              <div className="d-flex justify-content-between fs-6 tableRow p-3">
                <p className="fw-bold mb-0 bg-transparent">Liang|u3 🎩</p>
                <p className="fw-bold mb-0 bg-transparent">14,044,452</p>
              </div>
              <div className="d-flex justify-content-between bg-transparent fs-6 tableRowTransparent p-3">
                <p className="fw-bold mb-0 bg-transparent">🔥</p>
                <p className="fw-bold mb-0 bg-transparent">13,042,211</p>
              </div>
              <div className="d-flex justify-content-between  fs-6 tableRow p-3">
                <p className="fw-bold mb-0 bg-transparent">welp |1r 🌸</p>
                <p className="fw-bold mb-0 bg-transparent">12,054,452</p>
              </div>
              <div className="d-flex justify-content-between fs-6 bg-transparent tableRowTransparent p-3">
                <p className="fw-bold mb-0 bg-transparent">Liang|wao 🎩</p>
                <p className="fw-bold mb-0 bg-transparent">13,044,502</p>
              </div>
              <div className="d-flex justify-content-between fs-6 tableRow p-3">
                <p className="fw-bold mb-0 bg-transparent">alixkun🎩🍥</p>
                <p className="fw-bold mb-0 bg-transparent">16,042,211</p>
              </div>
              <div className="d-flex justify-content-between bg-transparent fs-6 tableRowTransparent p-3">
                <p className="fw-bold mb-0 bg-transparent">welp 🎩🌸</p>
                <p className="fw-bold mb-0 bg-transparent">15,044,452</p>
              </div>
              <div className="d-flex justify-content-between fs-6 tableRow p-3">
                <p className="fw-bold mb-0 bg-transparent">Liang|u3 🎩</p>
                <p className="fw-bold mb-0 bg-transparent">14,044,452</p>
              </div>
              <div className="d-flex justify-content-between bg-transparent fs-6 tableRowTransparent p-3">
                <p className="fw-bold mb-0 bg-transparent">alixkun🎩🍥</p>
                <p className="fw-bold mb-0 bg-transparent">13,042,211</p>
              </div>
              <div className="d-flex justify-content-between  fs-6 tableRow p-3">
                <p className="fw-bold mb-0 bg-transparent">🔥</p>
                <p className="fw-bold mb-0 bg-transparent">12,054,452</p>
              </div>
              <div className="d-flex justify-content-between fs-6 bg-transparent tableRowTransparent p-3">
                <p className="fw-bold mb-0 bg-transparent">eggman 🔵</p>
                <p className="fw-bold mb-0 bg-transparent">13,044,502</p>
              </div>
              <div className="d-flex justify-content-between fs-6 tableRow p-3">
                <p className="fw-bold mb-0 bg-transparent">🌈 grant 🎩 🐸</p>
                <p className="fw-bold mb-0 bg-transparent">16,042,211</p>
              </div>
            </Col>
          </Row>
          <Col md={12} className="contentWrapper px-md-5 px-4 py-2">
            <div className="bg-transparent d-flex gap-4 footerWrapper py-4">
              <svg
                fill="currentColor"
                viewBox="0 0 24 24"
                className="footerIcons"
                aria-hidden="true"
              >
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
              </svg>

              <svg
                fill="currentColor"
                viewBox="0 0 1000 1000"
                className="footerIcons"
                aria-hidden="true"
              >
                <path d="M257.778 155.556H742.222V844.445H671.111V528.889H670.414C662.554 441.677 589.258 373.333 500 373.333C410.742 373.333 337.446 441.677 329.586 528.889H328.889V844.445H257.778V155.556Z"></path>
                <path d="M128.889 253.333L157.778 351.111H182.222V746.667C169.949 746.667 160 756.616 160 768.889V795.556H155.556C143.283 795.556 133.333 805.505 133.333 817.778V844.445H382.222V817.778C382.222 805.505 372.273 795.556 360 795.556H355.556V768.889C355.556 756.616 345.606 746.667 333.333 746.667H306.667V253.333H128.889Z"></path>
                <path d="M675.556 746.667C663.283 746.667 653.333 756.616 653.333 768.889V795.556H648.889C636.616 795.556 626.667 805.505 626.667 817.778V844.445H875.556V817.778C875.556 805.505 865.606 795.556 853.333 795.556H848.889V768.889C848.889 756.616 838.94 746.667 826.667 746.667V351.111H851.111L880 253.333H702.222V746.667H675.556Z"></path>
              </svg>

              <svg
                fill="currentColor"
                viewBox="0 0 1000 1000"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                className="footerIcons"
                aria-hidden="true"
              >
                <title>Artboard</title>
                <desc>Created with Sketch.</desc>
                <defs>
                  <linearGradient
                    x1="50%"
                    y1="0%"
                    x2="50%"
                    y2="99.2583404%"
                    id="linearGradient-1"
                  >
                    <stop stopColor="currentColor" offset="0%"></stop>
                    <stop stopColor="currentColor" offset="100%"></stop>
                  </linearGradient>
                </defs>
                <g
                  id="Artboard"
                  stroke="none"
                  strokeWidth="1"
                  fill="none"
                  fillRule="evenodd"
                >
                  <circle
                    id="Oval"
                    fill="url(#linearGradient-1)"
                    cx="500"
                    cy="500"
                    r="500"
                  ></circle>
                  <path
                    d="M226.328419,494.722069 C372.088573,431.216685 469.284839,389.350049 517.917216,369.122161 C656.772535,311.36743 685.625481,301.334815 704.431427,301.003532 C708.567621,300.93067 717.815839,301.955743 723.806446,306.816707 C728.864797,310.92121 730.256552,316.46581 730.922551,320.357329 C731.588551,324.248848 732.417879,333.113828 731.758626,340.040666 C724.234007,419.102486 691.675104,610.964674 675.110982,699.515267 C668.10208,736.984342 654.301336,749.547532 640.940618,750.777006 C611.904684,753.448938 589.856115,731.588035 561.733393,713.153237 C517.726886,684.306416 492.866009,666.349181 450.150074,638.200013 C400.78442,605.66878 432.786119,587.789048 460.919462,558.568563 C468.282091,550.921423 596.21508,434.556479 598.691227,424.000355 C599.00091,422.680135 599.288312,417.758981 596.36474,415.160431 C593.441168,412.561881 589.126229,413.450484 586.012448,414.157198 C581.598758,415.158943 511.297793,461.625274 375.109553,553.556189 C355.154858,567.258623 337.080515,573.934908 320.886524,573.585046 C303.033948,573.199351 268.692754,563.490928 243.163606,555.192408 C211.851067,545.013936 186.964484,539.632504 189.131547,522.346309 C190.260287,513.342589 202.659244,504.134509 226.328419,494.722069 Z"
                    id="Path-3"
                    fill="#0f172a"
                  ></path>
                </g>
              </svg>

              <svg
                fill="currentColor"
                viewBox="0 0 122 122"
                className="footerIcons"
                aria-hidden="true"
              >
                <path
                  d="M25.29 57.9139C25.2901 57.2347 25.4244 56.5623 25.6851 55.9352C25.9458 55.308 26.3278 54.7386 26.8092 54.2595C27.2907 53.7804 27.8619 53.4011 28.4903 53.1434C29.1187 52.8858 29.7918 52.7548 30.471 52.7579L39.061 52.7859C40.4305 52.7859 41.744 53.33 42.7124 54.2984C43.6809 55.2669 44.225 56.5803 44.225 57.9499V90.4299C45.192 90.1429 46.434 89.8369 47.793 89.5169C48.737 89.2952 49.5783 88.761 50.1805 88.0009C50.7826 87.2409 51.1102 86.2996 51.11 85.3299V45.0399C51.11 43.6702 51.654 42.3567 52.6224 41.3881C53.5908 40.4195 54.9043 39.8752 56.274 39.8749H64.881C66.2506 39.8752 67.5641 40.4195 68.5325 41.3881C69.5009 42.3567 70.045 43.6702 70.045 45.0399V82.4329C70.045 82.4329 72.2 81.5609 74.299 80.6749C75.0787 80.3452 75.7441 79.7931 76.2122 79.0877C76.6803 78.3822 76.9302 77.5545 76.931 76.7079V32.1299C76.931 30.7605 77.4749 29.4472 78.4431 28.4788C79.4113 27.5103 80.7245 26.9662 82.0939 26.9659H90.701C92.0706 26.9659 93.384 27.51 94.3525 28.4784C95.3209 29.4468 95.865 30.7603 95.865 32.1299V68.8389C103.327 63.4309 110.889 56.9269 116.89 49.1059C117.761 47.9707 118.337 46.6377 118.567 45.2257C118.797 43.8138 118.674 42.3668 118.209 41.0139C115.431 33.0217 111.016 25.6973 105.245 19.5096C99.474 13.3218 92.4749 8.40687 84.6955 5.07934C76.9161 1.75182 68.5277 0.0849617 60.0671 0.185439C51.6065 0.285917 43.2601 2.15152 35.562 5.66286C27.8638 9.17419 20.9834 14.2539 15.3611 20.577C9.73881 26.9001 5.49842 34.3272 2.91131 42.3832C0.324207 50.4391 -0.552649 58.9464 0.336851 67.3607C1.22635 75.775 3.86263 83.911 8.07696 91.2479C8.81111 92.5135 9.89118 93.5434 11.1903 94.2165C12.4894 94.8896 13.9536 95.178 15.411 95.0479C17.039 94.9049 19.066 94.7019 21.476 94.4189C22.5251 94.2998 23.4937 93.7989 24.1972 93.0116C24.9008 92.2244 25.2901 91.2058 25.291 90.1499L25.29 57.9139Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M25.1021 110.009C34.1744 116.609 44.8959 120.571 56.0802 121.456C67.2646 122.34 78.4757 120.114 88.4731 115.022C98.4705 109.93 106.864 102.172 112.726 92.6059C118.587 83.0395 121.688 72.0381 121.685 60.8188C121.685 59.4188 121.62 58.0337 121.527 56.6567C99.308 89.7947 58.2831 105.287 25.104 110.004"
                  fill="currentColor"
                ></path>
              </svg>

              <svg
                fill="currentColor"
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                viewBox="0 0 1080 1080"
                className="footerIcons"
                aria-hidden="true"
              >
                <g id="XMLID_200_">
                  <g id="XMLID_202_">
                    <g>
                      <path d="M536.6-1C238.3,0.4-2.3,243.2-1,541.4c1.4,298.2,244.2,538.9,542.4,537.6c298.2-1.4,538.9-244.2,537.6-542.4     C1077.6,238.3,834.8-2.3,536.6-1z M468.2,512.5c-53.3,0-96.6-43.2-96.6-96.5c0-53.3,43.2-96.5,96.6-96.5     c53.3,0,96.5,43.2,96.5,96.5C564.7,469.3,521.5,512.5,468.2,512.5z M545.2,616.9l0.5-0.6l0.5-0.6c27.6,17.8,59,24,90.4,25     c31.5,0.8,63.5-1.5,95.1-7.9c31.5-6.5,62.5-16.2,92.4-28.6c16.8-6.9,33.5-14.5,49.4-23.4c0.1-0.1,0.2-0.1,0.3-0.2     c9.9-6,19.6-12.2,29.1-18.7c2.1-1.5,4.1-3,6-4.6l0.2,0.3l0.8,1c-24.3,22.1-53.2,38.5-82.6,53c-29.7,14-60.7,25.5-92.7,33.8     c-31.9,8.2-65.2,14.5-98.9,11.4C602.5,653.7,567.5,642.1,545.2,616.9z M793,512.5c0-11.6,9.3-20.9,20.8-21     c11.6,0,20.9,9.3,21,20.8c0,11.5-9.3,21-20.8,21C802.5,533.4,793,524.1,793,512.5z M627.6,1030.5     C606.7,884.3,734.3,741.2,806.3,668c16.3-16.6,41.6-39.5,65.1-63.8c93.4-87.3,112-191.7-79.2-243.9     c-36.2-10.5-73.8-25.4-111.8-40.4c-1.2-3.5-2.6-6.8-4.1-9.9c-4.4-7.5-12-16.2-23.6-26c-24.9-21.6-71.5-21-111.8-11.5     c-44.6-10.5-88.5-14.2-130.8-4.1c-184.9,50.9-214.6,141.1-221.8,249.8c-9.8,117.4-15.5,204.9-60,304.9     C72.8,743,40.1,646,39.7,541.2C38.5,265.5,261,40.9,536.8,39.7c275.8-1.2,500.3,221.3,501.6,497.1     C1039.4,783.1,862,988.6,627.6,1030.5z"></path>
                    </g>
                  </g>
                  <path
                    id="XMLID_201_"
                    d="M536.1,416.9c0,37.5-30.4,67.9-67.9,67.9c-37.5,0-67.9-30.4-67.9-67.9s30.4-67.9,67.9-67.9   C505.7,349,536.1,379.4,536.1,416.9z"
                  ></path>
                </g>
              </svg>
            </div>
          </Col>
        </Row>
      </Container>

      {/* <div className="text-center pt-3">
      </div> */}
    </>
  );
}

export default App;
