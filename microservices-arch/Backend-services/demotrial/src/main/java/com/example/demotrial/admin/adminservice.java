package com.example.demotrial.admin;

import com.example.demotrial.customer.customer;
import com.example.demotrial.sellcompany.Sellcompany;
import com.example.demotrial.customer.location;
import com.example.demotrial.customer.shippingcompany;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import jakarta.ejb.Singleton;
import jakarta.persistence.*;


import java.io.BufferedReader;
import java.io.DataOutputStream;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.ArrayList;
import java.util.List;
import java.util.Random;


@Singleton
public class adminservice {
     private  final EntityManagerFactory emf = Persistence.createEntityManagerFactory("online");
     private EntityManager em = emf.createEntityManager();



    public String admin(admin c)  {

           em.getTransaction().begin();

            em.persist(c);

            em.getTransaction().commit();


        return "Admin added ";
    }


        public String addSellCompany(Sellcompany c) throws IOException {
            URL url = new URL("http://localhost:8080/demotrial-1.0-SNAPSHOT/api/sell/addCompany");
            HttpURLConnection connection = (HttpURLConnection) url.openConnection();
            connection.setRequestMethod("POST");
            connection.setRequestProperty("User-Agent", "MyHttpClient/1.0");
            connection.setRequestProperty("Content-Type", "application/json");

            String requestBody = "{\"username\": \"" + c.getUsername()  + "\"}";
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


        public List<Sellcompany> getallsellcompanies() throws IOException {
            URL url = new URL("http://localhost:8080/demotrial-1.0-SNAPSHOT/api/sell/getsellcompanies");
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
            ArrayList<Sellcompany> users = mapper.readValue(content.toString(), new TypeReference<ArrayList<Sellcompany>>(){});
            return  users;
        }

       public String addShipCompany(shippingcompany s) throws IOException {
           URL url = new URL("http://localhost:8080/demotrial-1.0-SNAPSHOT/api/shipping/addship");
           HttpURLConnection connection = (HttpURLConnection) url.openConnection();
           connection.setRequestMethod("POST");
           connection.setRequestProperty("User-Agent", "MyHttpClient/1.0");
           connection.setRequestProperty("Content-Type", "application/json");

           String requestBody = "{\"name\": \"" + s.getName() + "\"}";
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

       public List<shippingcompany> getallshipcompanies() throws IOException {
           URL url = new URL("http://localhost:8080/demotrial-1.0-SNAPSHOT/api/shipping/getshipcompanies");
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
           ArrayList<shippingcompany> users = mapper.readValue(content.toString(), new TypeReference<ArrayList<shippingcompany>>(){});
           return  users;
    }

       public String addlocation(int name, location l) throws IOException {

           URL url = new URL("http://localhost:8080/demotrial-1.0-SNAPSHOT/api/shipping/addlocation/"+name);
           HttpURLConnection connection = (HttpURLConnection) url.openConnection();
           connection.setRequestMethod("POST");
           connection.setRequestProperty("User-Agent", "MyHttpClient/1.0");
           connection.setRequestProperty("Content-Type", "application/json");

           String requestBody = "{\"name\": \"" +  l.getName() + "\"}";
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



    public List<customer> getcustomers() throws IOException {
        URL url = new URL("http://localhost:8080/demotrial-1.0-SNAPSHOT/api/customer/getcustomers");
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
        ArrayList<customer> users = mapper.readValue(content.toString(), new TypeReference<ArrayList<customer>>(){});
        return  users;
    }

}
