package com.example.demotrial.customer;


import jakarta.jms.JMSException;
import jakarta.ws.rs.*;
import jakarta.ws.rs.core.MediaType;

import javax.naming.NamingException;
import java.util.List;


@Path("/shipping")
@Consumes(MediaType.APPLICATION_JSON)
@Produces(MediaType.APPLICATION_JSON)
public class shipController {
     shippingcompanyservice service = new shippingcompanyservice();
    @POST
    @Path("/addship")
    public String addShipCompany(shippingcompany s) {
        return service.addShipCompany(s);
    }

    @GET
    @Path("/getshipcompanies")
    public List<shippingcompany> getallshipcompanies()
    {
        return service.getallshipcompanies();
    }
    @GET
    @Path("/getlocations/{id}")
    public List<location> getalllocations(@PathParam("id") int id )
    {
        return service.getalllocations(id);
    }
    @POST
    @Path("/addlocation/{name}")
    public String addlocation(@PathParam("name") int name, location l)
    {

        return service.addlocation(name,l);

    }
    @POST
    @Path("/confirmorder/{id}")
    public String confirmorder(@PathParam("id")int id) throws JMSException, NamingException {

        return  service.confirmorder(id);
    }

}
