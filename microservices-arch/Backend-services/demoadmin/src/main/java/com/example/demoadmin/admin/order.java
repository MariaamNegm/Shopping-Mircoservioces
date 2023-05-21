package com.example.demoadmin.admin;


import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;


@Entity
@Table(name = "orders")
public class order {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long order_id;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String name ;







    public boolean isShippied() {
        return shippied;
    }

    public void setShippied(boolean shippied) {
        this.shippied = shippied;
    }



    @ManyToOne
    @JoinColumn(name="shipCompany")
//    @JsonIgnore
    public shippingcompany ship;

    public Long getOrder_id() {
        return order_id;
    }

    public void setOrder_id(Long order_id) {
        this.order_id = order_id;
    }



    public shippingcompany getShip() {
        return ship;
    }

    public void setShip(shippingcompany ship) {
        this.ship = ship;
    }



    public  boolean shippied =false;

    public void setId(Long id) {
        this.order_id = id;
    }

    public Long getId() {
        return order_id;
    }
}
