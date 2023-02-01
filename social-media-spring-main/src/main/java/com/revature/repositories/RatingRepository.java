package com.revature.repositories;

import com.revature.models.Employee;
import com.revature.models.Rating;
import com.revature.models.Tag;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface RatingRepository extends JpaRepository<Rating, Integer> {

    public Optional<List<Rating>> findByEmployee(Employee employee);

   // public Optional<List<Employee>> findByTag(Tag tag1);

  //  public Optional<List<Employee>> findTop3ByScore();

}