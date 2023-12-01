import React, { ReactElement } from "react";

type Props = {
  loading?: boolean;
  children?: ReactElement;
  quantity?: number;
};
export default function Skeleton({ loading, children, quantity }: Props) {
  return (
    <>
      {loading && (
        <ul>
          <div className="grid grid-cols-4 gap-5">
            {[...Array(quantity || 8)].map((_, index) => (
              <div
                key={index}
                className="border border-outline shadow rounded-md max-w-sm w-full mx-auto"
              >
                <div className="animate-pulse flex items-center flex-wrap pb-1">
                  <div className="h-[150px] bg-[#F8F8FF] w-full rounded-t relative">
                    <img
                      src="https://i.pinimg.com/originals/1b/e7/ed/1be7ed023be4807eb9e001ff070422a2.png"
                      alt=""
                      className="h-20 absolute top-1/2 translate-y-[-50%] left-1/2 translate-x-[-50%]"
                    />
                  </div>
                  <div className="h-3 w-[80%] bg-2 mt-4 mx-2"></div>
                  <div className="h-3 w-[60%] bg-2 mt-4 mx-2"></div>
                  <div className="h-3 w-[80%] bg-2 mt-4 mx-2"></div>
                </div>
              </div>
            ))}
          </div>
        </ul>
      )}

      {!loading && children}
    </>
  );
}
