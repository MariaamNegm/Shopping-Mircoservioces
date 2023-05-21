package com.example.demoadmin.admin;





import jakarta.ejb.Singleton;
import jakarta.ejb.Stateless;
import jakarta.persistence.*;

import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;


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

//    @OneToMany(mappedBy="admin1", fetch=FetchType.EAGER)
//    private Set<Sellcompany> sellcompanies = new HashSet<Sellcompany>();
//    @OneToMany(mappedBy="admin2", fetch=FetchType.EAGER)
//    private Set<shippingcompany> shippingcompanies = new HashSet<shippingcompany>();
//    @OneToMany(mappedBy="admin3", fetch=FetchType.EAGER)
//    private Set<customer> customers = new HashSet<customer>();
    public void setId(int id) {
        this.id = id;
    }

    public int getId() {
        return id;
    }



}
