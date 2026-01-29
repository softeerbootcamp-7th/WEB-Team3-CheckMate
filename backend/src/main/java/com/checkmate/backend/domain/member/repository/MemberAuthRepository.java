package com.checkmate.backend.domain.member.repository;

import com.checkmate.backend.domain.member.entity.Member;
import com.checkmate.backend.domain.member.entity.MemberAuth;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface MemberAuthRepository extends JpaRepository<MemberAuth, Long> {
    Optional<MemberAuth> findByMember(Member member);
}
