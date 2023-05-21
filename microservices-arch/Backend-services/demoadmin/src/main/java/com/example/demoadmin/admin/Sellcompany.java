package com.example.demoadmin.admin;



import jakarta.persistence.*;

import java.util.HashSet;
import java.util.Set;


@Entity
@Table(name = "sellcompany")
public class Sellcompany {
    public Sellcompany() {
    }

    public Sellcompany(int id, String username, String pass ) {
        this.id = id;
        this.username = username;
        this.pass = pass;

    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public int id;

    public String  username;

    public  Boolean loggedin =false;
    public String pass;
//    @OneToMany(mappedBy="company", fetch=FetchType.EAGER)
//    public Set<product> products = new HashSet<product>();

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPass() {
        return pass;
    }

    public void setPass(String pass) {
        this.pass = pass;
    }

//    @ManyToOne
//    @JoinColumn(name="admin")
//    private admin admin1;

//    public admin getAdmin1() {
//        return admin1;
//    }
//
//    public void setAdmin1(admin admin1) {
//        this.admin1 = admin1;
//    }

    public void setId(int id) {
        this.id = id;
    }

    public int getId() {
        return id;
    }

    public  void login(Sellcompany d) {
          d.loggedin = true;
    }
}
