package com.example.demoadmin.admin;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "customer")
public class customer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public int id;

    public String username ;
    public String password;

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public  String location;
    Boolean loggedin =false;

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }


    public String getPassword() {
        return password;
    }

    public void setPassword(String pass) {
        this.password = pass;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getId() {
        return id;
    }

    public Boolean getLoggedin() {
        return loggedin;
    }

    public void setLoggedin(Boolean loggedin) {
        this.loggedin = loggedin;
    }

    public Set<notifications> getNotificationsSet() {
        return notificationsSet;
    }

    public void setNotificationsSet(Set<notifications> notificationsSet) {
        this.notificationsSet = notificationsSet;
    }

    @OneToMany(mappedBy="customer", fetch=FetchType.EAGER)
    @JsonIgnore
    public Set<notifications> notificationsSet = new HashSet<notifications>();




    public  void login(customer d) {
        d.loggedin = true;
    }

}
