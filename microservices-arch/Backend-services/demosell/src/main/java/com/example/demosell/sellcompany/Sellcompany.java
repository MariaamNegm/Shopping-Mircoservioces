package com.example.demosell.sellcompany;
import jakarta.persistence.*;

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



    public void setId(int id) {
        this.id = id;
    }

    public int getId() {
        return id;
    }

    public  void login(Sellcompany d) {
          d.loggedin = true;
    }
    public  void logout( ) {
        this.loggedin = false;
    }
}
