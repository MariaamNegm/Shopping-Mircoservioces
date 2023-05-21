package com.example.demotrial.customer;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

@Entity
@Table(name = "notifications")
public class notifications {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public  customer getCustomer() {
        return customer;
    }

    public void setCustomer( customer customer) {
        this.customer = customer;
    }

    @ManyToOne
    @JoinColumn(name = "customers")
    @JsonIgnore
    public customer customer;
    private String message ;

    public void setId(Long id) {
        this.id = id;
    }

    public Long getId() {
        return id;
    }
}
