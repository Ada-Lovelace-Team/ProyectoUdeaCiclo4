import React, { Fragment } from "react";

export const ListProducts = () => {
  return (
    <Fragment>
        <h1>
            <center>Lista de Productos</center>
        </h1>
        <br>
        </br>
<table class="table table-responsive table-bordered">
    <thead>
        <tr>
            <th>Fecha</th>
            <th>Diciembre/10/21</th>
            <th>Enero/10/22</th>
            <th>Febrero/10/24</th>
            <th>Marzo/10/25</th>
            <th>Abril/10/20</th>
            <th>Mayo/10/29</th>
            <th>Junio/10/30</th>
            <th>Julio/10/31</th>
            <th>Agosto/10/31</th>
            <th>Setiembre/10/31</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>IdVenta</td>
            <td>0001</td>
            <td>0002</td>
            <td>0003</td>
            <td>0004</td>
            <td>0005</td>
            <td>0006</td>
            <td>0007</td>
            <td>0008</td>
            <td>0009</td>
            <td>00010</td>
        </tr>
        <tr>
            <td>Valor</td>
            <td>$ 500,000</td>
            <td>$ 600,000</td>
            <td>$ 800,000</td>
            <td>$ 500,000</td>
            <td>$ 450,000</td>
            <td>$ 550,000</td>
            <td>$ 120,000</td>
            <td>$ 125,000</td>
            <td>$ 300,000</td>
            <td>$ 400,000</td>
        </tr>
        <tr>
            <td>Nombre Producto</td>
            <td>Sportivi</td>
            <td>Tennis sport</td>
            <td>Suela alta</td>
            <td>Suela baja</td>
            <td>Deportivos</td>
            <td>deportivo</td>
            <td>Sportivi</td>
            <td>Tennis sport</td>
            <td>Suela alta</td>
            <td>Suela baja</td>
        </tr>
        <tr>
            <td>Proveedor</td>
            <td>Adidas</td>
            <td>Puma</td>
            <td>Adidas</td>
            <td>Puma</td>
            <td>Puma</td>
            <td>Nike</td>
            <td>Nike</td>
            <td>Nike</td>
            <td>Puma</td>
            <td>Nike</td>
        </tr>
        <tr>
            <td>inventario</td>
            <td>100</td>
            <td>200</td>
            <td>100</td>
            <td>300</td>
            <td>4000</td>
            <td>5000</td>
            <td>40</td>
            <td>33</td>
            <td>45</td>
            <td>90</td>

        </tr>
    </tbody>
</table>
</Fragment>
  );
};

export default ListProducts;
