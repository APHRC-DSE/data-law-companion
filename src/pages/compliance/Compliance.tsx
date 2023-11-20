import ComplianceBanner from "../../assets/compliance/compliance-banner-5.png";
import ComplianceCard from "../../components/compliance/ComplianceCard";
import MainCard from "../../components/compliance/MainCard";
import { BsArrowRight } from "react-icons/bs";
// import ExpandCard from "../../components/compliance/ExpandCard";
// import { CountryContext } from "../../utils/Context";
// import { useContext } from "react";
import {
  // ComplianceIssuesData1,
  // ComplianceIssuesData2,
  // ComplianceIssuesData3,
  // AllComplianceIssuesData
  ComplianceIssuesData11,
  ComplianceIssuesData22,
  DetailedComplianceIssuesData,
} from "../../components/compliance/ComplianceIssuesData";

const Compliance = () => {
  //   const globalCountry = useContext(CountryContext);

  // console.log(DetailedComplianceIssuesData[0].country[globalCountry].description);
  return (
    <>
      {/* Hero */}
      <div
        className="h-auto w-full bg-cover py-5 px-10 md:px-20"
        style={{
          backgroundImage: `url(${ComplianceBanner})`,
        }}
      >
        <div className="mx-auto h-full flex flex-col lg:flex-row max-w-screen-2xl justify-between">
          <div className=" flex flex-col justify-center mr-4 gap-4 w-full lg:w-1/2 px-0 sm:px-8 mt-5 lg:mt-0">
            <h1 className="uppercase text-3xl sm:text-5xl font-bold">
              GET TO KNOW COMPLIANCE ISSUES
            </h1>
            <p className="text-lg sm:text-2xl text-dark-grey">
              Lorem, ipsum dolor sit amet consectetur uptatem repudiandae eius.
            </p>
            <a
              className="flex items-center font-semibold text-white bg-neutral-red hover:border-neutral-red hover:border hover:text-neutral-red hover:bg-transparent border py-3 px-8 w-full sm:w-1/2 focus:outline-none rounded-lg text-lg transition-all ease-in duration-150"
              href="#all-compliance-issues"
            >
              Get Started <BsArrowRight className="ml-4 text-xl" />
            </a>
          </div>

          <div className="hidden md:flex gap-10">
            <div className="space-y-10 mt-28">
              {ComplianceIssuesData11.map((data) => {
                return (
                  <ComplianceCard
                    key={crypto.randomUUID()}
                    ComplianceCardProps={data}
                  />
                );
              })}
            </div>

            <div className="space-y-10 mt-10">
              {ComplianceIssuesData22.map((data) => {
                return (
                  <ComplianceCard
                    key={crypto.randomUUID()}
                    ComplianceCardProps={data}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Other Compliance Issues */}
      <div
        className="py-10 px-4 sm:px-0 mx-auto max-w-screen-2xl"
        id="all-compliance-issues"
      >
        <h2 className="font-bold text-2xl sm:text-4xl text-center">
          Compliance Issues
        </h2>
        <div className="flex flex-col justify-around mb-10 w-full sm:w-5/6 mx-auto">
          {DetailedComplianceIssuesData.map((data, idx) => {
            return (
              <div key={crypto.randomUUID()} className="mt-14" id={data.id}>
                <h2 className="text-xl sm:text-3xl font-medium my-4 ml-8">
                  <span className="text-light-grey">{idx + 1}.</span>{" "}
                  {data.topic}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                  {data.children &&
                    data.children.map((dataItem) => {
                      return (
                        <MainCard
                          key={crypto.randomUUID()}
                          MainCardProps={dataItem}
                        />
                      );
                    })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Compliance;
