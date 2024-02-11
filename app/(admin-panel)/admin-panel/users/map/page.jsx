import GoogleMapView from "@/components/admin/users/GoogleMapView";
import Tabs from "@/components/admin/users/Tabs";
import React from "react";

const UsersMap = () => {
  return (
    <div className="w-full">
      {/* <Tabs /> */}
      <div className=" mt-3">
        <div className="">
          <GoogleMapView />
        </div>
      </div>
    </div>
  );
};

export default UsersMap;
