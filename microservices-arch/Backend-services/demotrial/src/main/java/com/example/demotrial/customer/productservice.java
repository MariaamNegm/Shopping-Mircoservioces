package com.example.demotrial.customer;

import jakarta.ejb.Stateless;
import jakarta.persistence.*;

import java.util.List;


@Stateless
public class productservice {
    private  final EntityManagerFactory emf = Persistence.createEntityManagerFactory("customer");
    private EntityManager em = emf.createEntityManager();

    public String addproduct(int id, product l)
    {
        l.setCompany_id(id);

        em.getTransaction().begin();

        em.persist(l);

        em.getTransaction().commit();
        return "product added successfully";


    }

    public List< product> getallsaleproducts(int company_id)
    {

        TypedQuery<product> query = em.createQuery("SELECT u FROM product u WHERE u.quantity>0 AND u.company_id=:company_id ", product.class);
        query.setParameter("company_id",  company_id);
        List<product>  products = query.getResultList();
        return products;
    }
    public List< product> getallproducts()
    {

        TypedQuery<product> query = em.createQuery("SELECT u FROM product u WHERE u.quantity>0  ", product.class);
        List<product>  products = query.getResultList();
        return products;
    }
    public List< product> getallsoldoutproducts()
    {

        TypedQuery<product> query = em.createQuery("SELECT u FROM product u WHERE u.sold_out=true and u.quantity=0", product.class);
        List<product>  products = query.getResultList();
        return products;
    }
    public List< product> getallsoldoutproductsbyid(int company_id )
    {

        TypedQuery<product> query = em.createQuery("SELECT u FROM product u WHERE u.sold_out=true and u.quantity=0 and u.company_id=:company_id ", product.class);
        query.setParameter("company_id",company_id);
        List<product>  products = query.getResultList();
        return products;
    }
    public product getproductbyid (int id)
    {
        product p = em.find(product.class,id);
        return p;
    }

}
