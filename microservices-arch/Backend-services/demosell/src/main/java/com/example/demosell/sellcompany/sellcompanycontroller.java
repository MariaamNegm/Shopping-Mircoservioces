package com.example.demosell.sellcompany;

import jakarta.ejb.EJB;
import jakarta.ws.rs.*;
import jakarta.ws.rs.core.MediaType;

import java.io.IOException;
import java.util.List;

@Path("/sell")
@Consumes(MediaType.APPLICATION_JSON)
@Produces(MediaType.APPLICATION_JSON)
public class sellcompanycontroller {
    @EJB
    sellcompanyservice aService = new sellcompanyservice();

    @POST
    @Path("/addCompany")
    public String addSellCompany(Sellcompany c)  {
        return aService.addSellCompany(c);

    }
    @GET
    @Path("/getsellcompanies")
    public List<Sellcompany> getallsellcompanies()
    {
        return aService.getallsellcompanies();
    }

    @POST
    @Path("/login")
    public String login(Sellcompany c)  {
        return aService.login(c);

    }
    @POST
    @Path("/logout/{id}")
    public String logout(@PathParam("id")int id)  {
        return aService.logout(id);

    }
    @POST
    @Path("/addproduct/{id}")
    public String login(@PathParam("id") int id, product c) throws IOException {
        return aService.addproduct(id,c);
    }

    @GET
    @Path("/getsaleproducts/{id}")
    public List<product> getsaleproducts(@PathParam("id")int id) throws IOException {
        return aService.getallsaleproducts(id);
    }
    @GET
    @Path("/getsoldoutbyid/{id}")
    public List<product> getsoldout(@PathParam("id")int id) throws IOException {
        return aService.getallsoldoutbyid(id);
    }

}
