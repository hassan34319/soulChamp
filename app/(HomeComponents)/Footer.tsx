import { Nunito } from "next/font/google";
import React from "react";
import { nunito } from "../utils/Nunito";

type Props = {};

function Footer({}: Props) {
  return (
    <main className="w-full">
      <div className="bg-black flex flex-col py-[3vh] my-[2vh] border-white border-y-[1px] border-opacity-20 w-full items-center">
        <h1
          className={`text-base md:text-xl lg:text-2xl ${nunito.className} text-white font-bold mb-[2vh]`}
        >
          Follow Us
        </h1>
        <div className="flex flex-row space-x-4 justify-center">
          <svg
            className="md:w-[40px] md:h-[40px] w-[25px] h-[25px]"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_8_59)">
              <path
                d="M40 20C40 8.94815 31.0519 0 20 0C8.94815 0 0 8.94815 0 20C0 29.9852 7.31852 38.2519 16.8889 39.763V25.7778H11.7926V20H16.8889V15.5852C16.8889 10.5778 19.8519 7.82222 24.4148 7.82222C26.6074 7.82222 28.8889 8.20741 28.8889 8.20741V13.1259H26.3704C23.8815 13.1259 23.1111 14.6667 23.1111 16.237V20H28.6519L27.763 25.7778H23.1111V39.763C32.6815 38.2519 40 29.9852 40 20Z"
                fill="white"
              />
              <path
                d="M27.793 25.7778L28.6819 20H23.1115V16.2371C23.1115 14.6667 23.8819 13.126 26.3707 13.126H28.8893V8.20745C28.8893 8.20745 26.6078 7.82227 24.4152 7.82227C19.8522 7.82227 16.8893 10.5778 16.8893 15.5852V20H11.793V25.7778H16.8893V39.763C17.8967 39.9112 18.9633 40 20.0004 40C21.067 40 22.1041 39.9112 23.1115 39.763V25.7778H27.793Z"
                fill="black"
              />
            </g>
            <defs>
              <clipPath id="clip0_8_59">
                <rect width="40" height="40" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <svg
            className="md:w-[40px] md:h-[40px] w-[25px] h-[25px]"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_8_63)">
              <path
                d="M20 40C31.0457 40 40 31.0457 40 20C40 8.9543 31.0457 0 20 0C8.9543 0 0 8.9543 0 20C0 31.0457 8.9543 40 20 40Z"
                fill="white"
              />
              <path
                d="M15.9704 31.5258C25.7482 31.5258 31.0815 23.4369 31.0815 16.4147C31.0815 16.1777 31.0815 15.9703 31.0519 15.7332C32.0889 14.9925 32.9778 14.0443 33.6889 12.9777C32.7408 13.3925 31.7038 13.6888 30.6371 13.8073C31.7334 13.1554 32.563 12.1184 32.9778 10.874C31.9408 11.4962 30.8149 11.911 29.6 12.1777C28.6223 11.1406 27.2593 10.4888 25.7186 10.4888C22.7852 10.4888 20.4149 12.8591 20.4149 15.7925C20.4149 16.2073 20.4741 16.6221 20.563 17.0073C16.1482 16.7999 12.2371 14.6665 9.62967 11.4665C9.18523 12.2369 8.91856 13.1554 8.91856 14.1332C8.91856 15.9703 9.86671 17.5999 11.2889 18.548C10.4297 18.5184 9.60004 18.2814 8.88893 17.8962C8.88893 17.9258 8.88893 17.9258 8.88893 17.9554C8.88893 20.5332 10.726 22.6665 13.1556 23.1703C12.7112 23.2888 12.2371 23.348 11.763 23.348C11.4075 23.348 11.0815 23.3184 10.7556 23.2591C11.4371 25.3628 13.3926 26.9036 15.7037 26.9332C13.8963 28.3554 11.5852 29.2147 9.09634 29.2147C8.68153 29.2147 8.23708 29.1851 7.82227 29.1554C10.163 30.6369 12.9482 31.5258 15.9704 31.5258Z"
                fill="black"
              />
            </g>
            <defs>
              <clipPath id="clip0_8_63">
                <rect width="40" height="40" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <svg
            className="md:w-[40px] md:h-[40px] w-[25px] h-[25px]"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_8_52)">
              <path
                d="M20 40C31.0457 40 40 31.0457 40 20C40 8.95431 31.0457 0 20 0C8.95431 0 0 8.95431 0 20C0 31.0457 8.95431 40 20 40Z"
                fill="white"
              />
              <path
                d="M24.2491 8.88892H15.7602C11.9735 8.88892 8.89795 11.9645 8.89795 15.7511V24.24C8.89795 28.0267 11.9735 31.1023 15.7602 31.1023H24.2491C28.0357 31.1023 31.1113 28.0267 31.1113 24.24V15.7511C31.1113 11.9645 28.0357 8.88892 24.2491 8.88892ZM28.6313 24.2489C28.6313 26.6667 26.6668 28.64 24.2402 28.64H15.7513C13.3335 28.64 11.3602 26.6756 11.3602 24.2489V15.76C11.3602 13.3422 13.3246 11.3689 15.7513 11.3689H24.2402C26.658 11.3689 28.6313 13.3334 28.6313 15.76V24.2489Z"
                fill="black"
              />
              <path
                d="M19.9998 14.3201C16.8709 14.3201 14.3198 16.8712 14.3198 20.0001C14.3198 23.129 16.8709 25.6801 19.9998 25.6801C23.1287 25.6801 25.6798 23.129 25.6798 20.0001C25.6798 16.8712 23.1287 14.3201 19.9998 14.3201ZM19.9998 23.449C18.0976 23.449 16.5509 21.9023 16.5509 20.0001C16.5509 18.0978 18.0976 16.5512 19.9998 16.5512C21.902 16.5512 23.4487 18.0978 23.4487 20.0001C23.4487 21.9023 21.902 23.449 19.9998 23.449Z"
                fill="black"
              />
              <path
                d="M26.1126 14.9426C26.6359 14.8574 26.991 14.3641 26.9058 13.8408C26.8206 13.3175 26.3273 12.9624 25.804 13.0476C25.2807 13.1328 24.9255 13.6261 25.0108 14.1494C25.096 14.6727 25.5893 15.0278 26.1126 14.9426Z"
                fill="black"
              />
            </g>
            <defs>
              <clipPath id="clip0_8_52">
                <rect width="40" height="40" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <svg
            className="md:w-[40px] md:h-[40px] w-[25px] h-[25px]"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_9_492)">
              <path
                d="M20 39.9998C31.0457 39.9998 40 31.0455 40 19.9998C40 8.95406 31.0457 -0.000244141 20 -0.000244141C8.95431 -0.000244141 0 8.95406 0 19.9998C0 31.0455 8.95431 39.9998 20 39.9998Z"
                fill="white"
              />
              <path
                d="M31.9499 21.609V29.8545H27.1694V22.1616C27.1694 20.23 26.4792 18.9108 24.7483 18.9108C23.4274 18.9108 22.6427 19.7989 22.2961 20.6589C22.1703 20.9662 22.1378 21.3929 22.1378 21.824V29.8542H17.3569C17.3569 29.8542 17.4211 16.8248 17.3569 15.4761H22.1382V17.5136C22.1286 17.5297 22.115 17.5454 22.1064 17.5607H22.1382V17.5136C22.7735 16.5361 23.9065 15.1385 26.4467 15.1385C29.5919 15.1385 31.9499 17.1935 31.9499 21.609ZM12.3557 8.54541C10.7203 8.54541 9.65039 9.61889 9.65039 11.0293C9.65039 12.4097 10.6893 13.5142 12.2929 13.5142H12.3239C13.9914 13.5142 15.0281 12.4097 15.0281 11.0293C14.9964 9.61889 13.9914 8.54541 12.3557 8.54541ZM9.93454 29.8545H14.7137V15.4761H9.93454V29.8545Z"
                fill="black"
              />
            </g>
            <defs>
              <clipPath id="clip0_9_492">
                <rect width="40" height="40" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
      <p className="py-[1vh] text-[0.4rem] text-opacity-70 mx-auto text-center md:text-xs ">
      © 2018-23 SoulChamp • Privacy Policy • Site Developed by Muhammad Hassan • Site Designed by Huzaifa Ijaz
      </p>

    </main>
  );
}

export default Footer;
