import React from "react";
import Select from "react-select";

const OrderedItems = ({ order }) => {
  order.status ? (order.status = order.status) : (order.status = "Unknown");

  const options = [
    { value: order.status, label: order.status },
    { value: "Approved", label: "Approved" },
    { value: "Delivering", label: "Delivering" },
    { value: "Delivered", label: "Delivered" },
    { value: "Canceled", label: "Canceled" },
  ];
  return (
    <div className="d-flex justify-content-between">
      <div
        style={{
          background: "#DEFFED",
          borderRadius: "5px",
          padding: "15px",
          width: "350px",
          marginLeft: "15px",
          marginTop: "15px",
        }}
      >
        <div>
          <h4>{order.service}</h4>
          <p>{order.description}</p>
        </div>
        <div>
          <Select
            name="Select Product status"
            options={options}
            defaultValue={{ label: order.status, value: order.status }}
            onChange={(e) => {
              order.status = e.value;
              console.log(e.value)
              console.log(order)

              fetch(`https://tranquil-thicket-03462.herokuapp.com/orders/${order._id}`, {
                method: "PUT",
                headers:{
                    'content-type': 'application/json'
                },
                body: JSON.stringify(order),
              })
                .then((response) => response.json())
                .then(data => {
                  console.log(data);
                  alert("Service Updated Successfully!");
                })
                .catch((error) => {
                  console.error(error);
                });
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default OrderedItems;
