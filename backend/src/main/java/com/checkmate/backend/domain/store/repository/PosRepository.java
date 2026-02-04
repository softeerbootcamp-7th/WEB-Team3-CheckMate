package com.checkmate.backend.domain.store.repository;

import com.checkmate.backend.domain.store.entity.Pos;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface PosRepository extends JpaRepository<Pos, Long> {
    @Query("SELECT p FROM Pos p WHERE p.store.id = :storeId")
    List<Pos> findByStoreId(@Param("storeId") Long storeId);
}
