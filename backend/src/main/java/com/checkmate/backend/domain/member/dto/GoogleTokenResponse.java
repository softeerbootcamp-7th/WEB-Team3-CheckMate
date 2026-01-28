package com.checkmate.backend.domain.member.dto;

public record GoogleTokenResponse(
    String access_token,
    Integer expires_in,
    String scope,
    String token_type,
    String id_token, // OIDC를 위한 신분증
    String refresh_token // Access Token 만료 시 재발급용
    ) {}
