package com.example.demosell.sellcompany;


import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

import java.util.HashSet;
import java.util.Set;

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
    @ManyToOne
    @JoinColumn(name="customer")
    @JsonIgnore
    public customer customer1;

    public Set<product> getProductSet() {
        return productSet;
    }

    public void setProductSet(Set<product> productSet) {
        this.productSet = productSet;
    }

    @ManyToMany(mappedBy="orderSet", fetch = FetchType.EAGER)
    @JsonIgnore
    public Set<product> productSet = new HashSet<product>();

    public customer getCustomer() {
        return customer1;
    }

    public void setCustomer( customer customer) {
        this.customer1 = customer;
    }
    public void addpro ( product o )
    {
        boolean added = productSet.add(o);
        if(added)
        {
            o.getOrderSet().add(this);

        }
    }


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

    public customer getCustomer1() {
        return customer1;
    }

    public void setCustomer1(customer customer1) {
        this.customer1 = customer1;
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
