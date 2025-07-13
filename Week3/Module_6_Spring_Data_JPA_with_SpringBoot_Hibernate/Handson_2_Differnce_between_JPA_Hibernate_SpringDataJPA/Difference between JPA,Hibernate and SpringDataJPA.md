# JPA vs Hibernate vs Spring Data JPA

This README explains the differences between JPA, Hibernate, and Spring Data JPA in simple terms, followed by working Java code examples for each approach.

---

## What Is JPA?

JPA (Java Persistence API) is a specification. It defines a standard way to map Java objects to relational database tables, but it doesn't provide the actual implementation. You need a JPA provider (like Hibernate) to use it in practice.

- It uses annotations like `@Entity`, `@Id`, etc.
- Works with an `EntityManager` to persist, update, delete data.
- Requires a `persistence.xml` configuration.

---

## What Is Hibernate?

Hibernate is an implementation of the JPA specification. It also includes additional features beyond JPA:

- Supports HQL (Hibernate Query Language) and native SQL
- Provides caching, lazy loading, batch processing, etc.
- Can be used with or without JPA

You can use either the JPA API (`EntityManager`) or native Hibernate API (`Session`) with it.

---

## What Is Spring Data JPA?

Spring Data JPA is part of the Spring Framework. It builds on top of JPA and Hibernate and reduces boilerplate code by auto-generating repository implementations.

- Uses Spring repositories like `JpaRepository`
- Automatically handles queries based on method names
- Fully integrated with Spring Boot (no XML config needed)

---
## Common Entity Example

```java
import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Product {
    @Id
    private Long id;
    private String name;

    // Getters and Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
}
```

---

## JPA Example (Standard API)

Persistence using `EntityManager`:

```java
import jakarta.persistence.*;

public class JpaExample {
    public static void main(String[] args) {
        EntityManagerFactory emf = Persistence.createEntityManagerFactory("myPU");
        EntityManager em = emf.createEntityManager();

        Product p = new Product();
        p.setId(1L);
        p.setName("JPA Laptop");

        em.getTransaction().begin();
        em.persist(p);
        em.getTransaction().commit();

        em.close();
        emf.close();
    }
}
```
---

## Hibernate Example (Native API)

Persistence using Hibernate `Session`:

```java
import org.hibernate.*;
import org.hibernate.cfg.Configuration;

public class HibernateExample {
    public static void main(String[] args) {
        Configuration cfg = new Configuration().configure(); // loads hibernate.cfg.xml
        SessionFactory factory = cfg.buildSessionFactory();
        Session session = factory.openSession();

        Product p = new Product();
        p.setId(2L);
        p.setName("Hibernate Phone");

        Transaction tx = session.beginTransaction();
        session.save(p);
        tx.commit();

        session.close();
        factory.close();
    }
}
```

---

## Spring Data JPA Example

### 🔹 Repository Interface

```java
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface ProductRepository extends JpaRepository<Product, Long> {
    List<Product> findByNameContaining(String keyword);
}
```

### 🔹 REST Controller

```java
import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;
import java.util.List;

@RestController
@RequestMapping("/products")
public class ProductController {

    @Autowired
    private ProductRepository productRepository;

    @PostMapping
    public Product save(@RequestBody Product p) {
        return productRepository.save(p);
    }

    @GetMapping
    public List<Product> getAll() {
        return productRepository.findAll();
    }

    @GetMapping("/search")
    public List<Product> search(@RequestParam String keyword) {
        return productRepository.findByNameContaining(keyword);
    }
}
```

Spring Boot auto-configures `EntityManager`, `DataSource`, and `TransactionManager`.

---

## Summary

- **JPA** is a standard (interface) — you need a provider like Hibernate to use it.
- **Hibernate** is the actual ORM tool — it implements JPA and adds more advanced features.
- **Spring Data JPA** is a wrapper over JPA/Hibernate — simplifies repository logic and CRUD operations using Spring.

Flow in Spring Boot:

```text
Spring Data JPA → JPA → Hibernate → Database
```
