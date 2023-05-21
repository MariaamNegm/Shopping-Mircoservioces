package com.example.demotrial.customer;


import jakarta.ejb.EJB;
import jakarta.jms.JMSException;

import jakarta.ws.rs.*;
import jakarta.ws.rs.core.MediaType;

import javax.naming.NamingException;

import java.io.IOException;
import java.util.List;

@Path("/customer")
@Consumes(MediaType.APPLICATION_JSON)
@Produces(MediaType.APPLICATION_JSON)
public class customerController {
    @EJB
     customerservice aService = new customerservice();

    @POST
    @Path("/addCustomer")
    public String addcustomer(customer c)  {

        return aService.addcustomer(c);
    }
    @POST
    @Path("/createorder/{id}")
    public String createorder(order c,@PathParam("id")int id )  {

        return aService.createorder(c,id);
    }
    @POST
    @Path("/addproduct/{order_id}/{product_id}")
    public String addproduct(@PathParam("order_id") int order_id,@PathParam("product_id")int product_id) {
        return aService.addproduct(order_id,product_id);
    }
    @POST
    @Path("/login")
    public String login(customer c)  {

        return aService.login(c);
    }
    @GET
    @Path("/getcustomers")
    public List<customer> getcustomers()
    {

        return  aService.getcustomers();
    }
    @GET
    @Path("/getnotifications/{id}")
    public List<notifications> getnotifications(@PathParam("id")int id)
    {

        return  aService.getnotifications(id);
    }
    @GET
    @Path("/getcurrentorders/{id}")
    public List<order> getcurrent(@PathParam("id")int id)
    {

        return  aService.getallcurrentorders(id);
    }

    @GET
    @Path("/getpastorders/{id}")
    public List<order> getpast(@PathParam("id")int id)
    {

        return  aService.getallpastorders(id);
    }
    @GET
    @Path("/getall")
    public List<order> getall()
    {

        return  aService.getallorders();
    }
    @GET
    @Path("/getallbyid/{id}")
    public List<order> getallbyid(@PathParam("id")int id)
    {

        return  aService.getallordersbyid(id);
    }
    @POST
    @Path("/logout/{id}")
    public String logout(@PathParam("id")int id)  {
        return aService.logout(id);

    }

    @POST
    @Path("/confirmorder/{id}")
    public String confirmorder(@PathParam("id")int id) throws IOException, NamingException, JMSException {

        return aService.confirmorder(id);
    }



}

