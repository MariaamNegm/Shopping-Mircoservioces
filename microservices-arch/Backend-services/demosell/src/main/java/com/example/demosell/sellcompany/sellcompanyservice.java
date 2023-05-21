package com.example.demosell.sellcompany;


import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import jakarta.ejb.Stateless;
import jakarta.persistence.EntityManager;
import jakarta.persistence.EntityManagerFactory;
import jakarta.persistence.Persistence;
import jakarta.persistence.TypedQuery;

import java.io.BufferedReader;
import java.io.DataOutputStream;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.ArrayList;
import java.util.List;
import java.util.Random;

@Stateless
public class sellcompanyservice {
    private  final EntityManagerFactory emf = Persistence.createEntityManagerFactory("demosell");
    private EntityManager em = emf.createEntityManager();

    public String addSellCompany(Sellcompany c)  {
        String characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        StringBuilder password = new StringBuilder();
        Random random = new Random();
        for (int i = 0; i < 5; i++) {
            password.append(characters.charAt(random.nextInt(characters.length())));
        }
        c.setPass(password.toString());



        em.getTransaction().begin();

        em.persist(c);

        em.getTransaction().commit();


        return "Sell Company added ";
    }


    public List<Sellcompany> getallsellcompanies()
    {
        return em.createQuery("SELECT u FROM Sellcompany u", Sellcompany.class).getResultList();
    }

    public String login(Sellcompany c) {
        String username=c.getUsername();
        String pass = c.getPass();
        TypedQuery<Sellcompany> query = em.createQuery("SELECT u FROM  Sellcompany u WHERE u.username=:username AND u.pass=:pass", Sellcompany.class);
        query.setParameter("username", username);
        query.setParameter("pass", pass);

        List<Sellcompany> users = query.getResultList();
        if(!users.isEmpty()) {
            users.get(0).login(users.get(0));

            return "logged in Successfully";
        }
        else return "username not found";

    }
    public String logout(int id) {
       Sellcompany s = em.find(Sellcompany.class,id);
       s.logout();
       return "logged out Successfully";

    }

    public String addproduct(int id, product c) throws IOException {
        URL url = new URL("http://localhost:8080/demotrial-1.0-SNAPSHOT/api/product/addproduct/"+id);
        HttpURLConnection connection = (HttpURLConnection) url.openConnection();
        connection.setRequestMethod("POST");
        connection.setRequestProperty("User-Agent", "MyHttpClient/1.0");
        connection.setRequestProperty("Content-Type", "application/json");

        String requestBody = "{\"name\": \"" + c.getName() + "\", \"quantity\": \"" + c.getQuantity() + "\" , \"price\": \"" + c.getPrice() + "\", \"image\": \"" + c.getImage() + "\"  }";
        connection.setDoOutput(true);
        DataOutputStream outputStream = new DataOutputStream(connection.getOutputStream());
        outputStream.writeBytes(requestBody);
        outputStream.flush();
        outputStream.close();

        int statusCode = connection.getResponseCode();
        System.out.println("Status code: " + statusCode);

        BufferedReader in = new BufferedReader(new InputStreamReader(connection.getInputStream()));
        String inputLine;
        StringBuilder responseBody = new StringBuilder();
        while ((inputLine = in.readLine()) != null) {
            responseBody.append(inputLine);
        }
        in.close();

        return responseBody.toString();

    }

    public List<product> getallsaleproducts(int id) throws IOException {
        URL url = new URL("http://localhost:8080/demotrial-1.0-SNAPSHOT/api/product/getsaleproducts/"+id);
        HttpURLConnection con  = (HttpURLConnection) url.openConnection();
        con.setRequestMethod("GET");
        con.setRequestProperty("User-Agent", "MyHttpClient/1.0");
        BufferedReader in = new BufferedReader(
                new InputStreamReader(con.getInputStream()));
        String inputLine;
        StringBuilder content = new StringBuilder();
        while ((inputLine = in.readLine()) != null) {
            content.append(inputLine);
        }
        in.close();
        con.disconnect();
        ObjectMapper mapper = new ObjectMapper();
        ArrayList<product> users = mapper.readValue(content.toString(), new TypeReference<ArrayList<product>>(){});
        return  users;
    }
    public List<product> getallsoldoutbyid(int id) throws IOException {
        URL url = new URL("http://localhost:8080/demotrial-1.0-SNAPSHOT/api/product/getsoldoutproducts/"+id);
        HttpURLConnection con  = (HttpURLConnection) url.openConnection();
        con.setRequestMethod("GET");
        con.setRequestProperty("User-Agent", "MyHttpClient/1.0");
        BufferedReader in = new BufferedReader(
                new InputStreamReader(con.getInputStream()));
        String inputLine;
        StringBuilder content = new StringBuilder();
        while ((inputLine = in.readLine()) != null) {
            content.append(inputLine);
        }
        in.close();
        con.disconnect();
        ObjectMapper mapper = new ObjectMapper();
        ArrayList<product> users = mapper.readValue(content.toString(), new TypeReference<ArrayList<product>>(){});
        return  users;
    }
}
