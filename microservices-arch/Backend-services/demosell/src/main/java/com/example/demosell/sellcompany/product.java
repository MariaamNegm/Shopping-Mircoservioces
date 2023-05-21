package com.example.demosell.sellcompany;
import jakarta.persistence.*;

import java.util.HashSet;
import java.util.Set;


@Entity
@Table(name = "product")
public class product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Long product_id;

    public String name ;
    public int quantity;

    public int company_id;
    public boolean isSold_out() {
        return sold_out;
    }

    public void setSold_out(boolean sold_out) {
        this.sold_out = sold_out;
    }

    public boolean sold_out=false;

    public int getCompany_id() {
        return company_id;
    }

    public void setCompany_id(int company_id) {
        this.company_id = company_id;
    }


    public Set<order> getOrderSet() {
        return orderSet;
    }

    public void setOrderSet(Set<order> orderSet) {
        this.orderSet = orderSet;
    }

    @ManyToMany(cascade = {CascadeType.PERSIST,CascadeType.MERGE} ,fetch = FetchType.LAZY
    )
    @JoinTable(
            name="ordersxproducts",
            joinColumns= {@JoinColumn(name = "product_id")},
            inverseJoinColumns= {@JoinColumn(name = "order_id")},
            uniqueConstraints = {@UniqueConstraint(columnNames = {"product_id","order_id"})}


    )

    public Set<order> orderSet = new HashSet<order>();




    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public void setId(Long id) {
        this.product_id = id;
    }

    public Long getId() {
        return product_id;
    }

    public  void soldout(product d) {
        d.sold_out = true;
    }
    private String image ;
    private int price;

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }
}
