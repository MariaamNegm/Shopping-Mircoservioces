package com.example.demotrial.admin;


import jakarta.persistence.*;




@Entity

@Table(name = "admin")
public class admin  {
    @Id
    public int id=1;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    String name ;


    public void setId(int id) {
        this.id = id;
    }

    public int getId() {
        return id;
    }



}
