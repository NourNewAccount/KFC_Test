import React, { useState, useEffect } from "react";
import ExploreNav from "../../components/ExploreNav/ExploreNav";
import SidebarMeal from "../../components/SidebarMeal/SidebarMeal";
import List from "../../components/List";
import DealCard from "../../components/Cards/DealCrad/DealCard";
import axios from "axios";
import { localData } from "./localData";

const apiUrl = "https://6566877e64fcff8d730edcb9.mockapi.io/api/v1/menuItems";

const ExploreDetailsPage = () => {
  const [selectedContentType, setSelectedContentType] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(apiUrl);

        const filteredApiData = response.data.filter(
          (item) => item.type === selectedContentType
        );

        const filteredLocalData = localData.filter(
          (item) => item.type === selectedContentType
        );

        const combinedData = [
          ...new Set([...filteredApiData, ...filteredLocalData]),
        ];

        setData(combinedData);
      } catch (error) {
        console.error("Error fetching data:", error);
        setData(localData);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [selectedContentType]);

  const handleTabChange = (contentType) => {
    setSelectedContentType(contentType);
    console.log("Selected Content Type:", contentType);
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const filteredData = selectedContentType
    ? data.filter((item) => item.type === selectedContentType)
    : data;

    const filteredDataWithSearch = searchQuery
    ? filteredData.filter(
        (item) =>
          item.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : filteredData;
  

  return (
    <div className="pl-32 pr-32 md:pl-20 md:pr-20 sm:pl-5 sm:pr-5 pb-8">
      <ExploreNav onTabChange={handleTabChange} onSearch={handleSearch} />

      <div className="flex w-full justify-between items-start">
        <div className="max-w-[67%]">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <List className="flex gap-8 justify-start mt-[5px] items-center flex-wrap w-full">
              <DealCard menuItems={filteredDataWithSearch} />
            </List>
          )}
        </div>
        <div className="w-[29%]">
          <SidebarMeal />
        </div>
      </div>
    </div>
  );
};

export default ExploreDetailsPage;
