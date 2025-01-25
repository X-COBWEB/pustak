import React from "react";
import Voucher from "../Components/Voucher";

export default function page() {
  return (
    <div>
      <div className="intro">
        <h2>Welcome to the Voucher Section</h2>
        <p>
          This section is designed to provide you with a list of available
          vouchers. Each voucher is displayed below, and you can explore the
          details of each one by clicking on it.
        </p>
        <ul>
          <li>
            <Voucher />
          </li>
          <li>
            <Voucher />
          </li>
          <li>
            <Voucher />
          </li>
        </ul>
      </div>
    </div>
  );
}
