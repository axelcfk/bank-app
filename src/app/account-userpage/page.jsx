"use client";

import Link from "next/link";

export default function UserPage() {
  return (
    <div>
      <div
        className="absolute w-screen h-screen bg-cover bg-[url('/rock.jpg')] "
        style={{ zIndex: -1 }}
      ></div>
      <div className="px-8" style={{ backdropFilter: "blur(2px)" }}>
        <div className="flex justify-between items-center">
          <div className="py-5">
            <h2 className="text-slate-200 text-xl -mb-2">Your Cards</h2>
            <p className="text-slate-200 text-sm">2 physical, 1 virtual</p>
          </div>
          <div>
            <Link href={"/"}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24px"
                height="24px"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M14 20H6C4.89543 20 4 19.1046 4 18L4 6C4 4.89543 4.89543 4 6 4H14M10 12H21M21 12L18 15M21 12L18 9"
                  stroke="rgb(226 232 240)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
        </div>
        <div className=" flex flex-col bg-slate-900 px-10 py-2 rounded-3xl text-slate-200">
          <div className="flex justify-between items-center text-slate-200">
            <p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50px"
                height="50px"
                viewBox="0 -11 70 70"
                fill="none"
              >
                <rect
                  x="0.5"
                  y="0.5"
                  width="69"
                  height="47"
                  rx="5.5"
                  fill="white"
                  stroke="#D9D9D9"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M21.2505 32.5165H17.0099L13.8299 20.3847C13.679 19.8267 13.3585 19.3333 12.8871 19.1008C11.7106 18.5165 10.4142 18.0514 9 17.8169V17.3498H15.8313C16.7742 17.3498 17.4813 18.0514 17.5991 18.8663L19.2491 27.6173L23.4877 17.3498H27.6104L21.2505 32.5165ZM29.9675 32.5165H25.9626L29.2604 17.3498H33.2653L29.9675 32.5165ZM38.4467 21.5514C38.5646 20.7346 39.2717 20.2675 40.0967 20.2675C41.3931 20.1502 42.8052 20.3848 43.9838 20.9671L44.6909 17.7016C43.5123 17.2345 42.216 17 41.0395 17C37.1524 17 34.3239 19.1008 34.3239 22.0165C34.3239 24.2346 36.3274 25.3992 37.7417 26.1008C39.2717 26.8004 39.861 27.2675 39.7431 27.9671C39.7431 29.0165 38.5646 29.4836 37.3881 29.4836C35.9739 29.4836 34.5596 29.1338 33.2653 28.5494L32.5582 31.8169C33.9724 32.3992 35.5025 32.6338 36.9167 32.6338C41.2752 32.749 43.9838 30.6502 43.9838 27.5C43.9838 23.5329 38.4467 23.3004 38.4467 21.5514ZM58 32.5165L54.82 17.3498H51.4044C50.6972 17.3498 49.9901 17.8169 49.7544 18.5165L43.8659 32.5165H47.9887L48.8116 30.3004H53.8772L54.3486 32.5165H58ZM51.9936 21.4342L53.1701 27.1502H49.8723L51.9936 21.4342Z"
                  fill="#172B85"
                />
              </svg>
            </p>
            <p>09/30</p>
          </div>
          <div className=" flex flex-row  justify-between items-end">
            <div className="flex flex-col">
              <p className="-mb-3 text-4xl font-semibold">26,580.90</p>
              <p className="font-thin text-sm">Total Balance SEK</p>
            </div>
            <p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30px"
                height="30px"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M7 14H17M7 10H17M6.2 18H17.8C18.9201 18 19.4802 18 19.908 17.782C20.2843 17.5903 20.5903 17.2843 20.782 16.908C21 16.4802 21 15.9201 21 14.8V9.2C21 8.07989 21 7.51984 20.782 7.09202C20.5903 6.71569 20.2843 6.40973 19.908 6.21799C19.4802 6 18.9201 6 17.8 6H6.2C5.0799 6 4.51984 6 4.09202 6.21799C3.71569 6.40973 3.40973 6.71569 3.21799 7.09202C3 7.51984 3 8.07989 3 9.2V14.8C3 15.9201 3 16.4802 3.21799 16.908C3.40973 17.2843 3.71569 17.5903 4.09202 17.782C4.51984 18 5.07989 18 6.2 18Z"
                  stroke="rgb(226 232 240)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </p>
          </div>
        </div>
        <div className="flex justify-evenly py-5">
          <p className="bg-slate-100 h-8 rounded-full w-20 flex justify-center items-center">
            Withdraw
          </p>
          <p className="bg-slate-100 h-8 w-20 rounded-full flex justify-center items-center">
            Deposit
          </p>
          <p className="bg-slate-100 h-8 w-20 flex justify-center items-center rounded-full">
            Invest
          </p>
        </div>
      </div>
      <div className="bg-slate-100 px-8">
        <div className="flex justify-between items-center ">
          <h3 className="text-xl">Quickpay </h3>{" "}
          {/* Det här kommer att betala allt på en gång */}
          <p className="text-3xl hover:cursor-pointer hover:font-semibold text-blue-800">
            +
          </p>
        </div>
        <div>
          <div className="hover:cursor-pointer hover:font-semibold flex justify-between items-center border-solid border-t-0 border-r-0 border-l-0 border-b-[0.5px] border-stone-400">
            <div className="flex flex-col">
              <p className="-mb-1">Mobile Phone</p>
              <p>549</p>
            </div>
            <p className="text-xl">&rarr;</p>{" "}
            {/* Det här kommer att betala enskilda utgifter */}
          </div>
          <div className="hover:cursor-pointer hover:font-semibold flex justify-between items-center border-solid border-t-0 border-r-0 border-l-0 border-b-[0.5px] border-stone-400">
            <div className="flex flex-col">
              <p className="-mb-1">Internet</p>
              <p>499</p>
            </div>
            <p className="text-xl">&rarr;</p>
          </div>
          <div className="hover:cursor-pointer hover:font-semibold flex justify-between items-center border-solid border-t-0 border-r-0 border-l-0 border-b-[0.5px] border-stone-400">
            <div className="flex flex-col">
              <p className="-mb-1">Electricity</p>
              <p>300</p>
            </div>
            <p className="text-xl">&rarr;</p>
          </div>
          <div className="hover:cursor-pointer hover:font-semibold flex justify-between items-center border-solid border-t-0 border-r-0 border-l-0 border-b-[0.5px] border-stone-400">
            <div className="flex flex-col">
              <p className="-mb-1">Gym</p>
              <p>629</p>
            </div>
            <p className="text-xl">&rarr;</p>
          </div>
          <div className="hover:cursor-pointer hover:font-semibold flex justify-between items-center border-solid border-t-0 border-r-0 border-l-0 border-b-[0.5px] border-stone-400">
            <div className="flex flex-col">
              <p className="-mb-1">Netflix</p>
              <p>99</p>
            </div>
            <p className="text-xl">&rarr;</p>
          </div>
        </div>
      </div>
    </div>
  );
}
