package com.checkmate.backend.domain.menu.controller;

import static com.checkmate.backend.global.response.SuccessStatus.INGREDIENT_GET_SUCCESS;

import com.checkmate.backend.domain.menu.service.IngredientService;
import com.checkmate.backend.global.auth.LoginMember;
import com.checkmate.backend.global.auth.MemberSession;
import com.checkmate.backend.global.response.ApiResponse;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.ExampleObject;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import java.util.List;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@Tag(name = "Ingredient", description = "식재료 관련 API 입니다.")
@RestController
@RequiredArgsConstructor
@RequestMapping("/api/ingredients")
@Slf4j
public class IngredientController {
    private final IngredientService ingredientService;

    /*
     * read
     * */

    @Operation(summary = "식재료 검색 API (용범)")
    @ApiResponses({
        @io.swagger.v3.oas.annotations.responses.ApiResponse(
                responseCode = "200",
                description = "식재료 조회 성공",
                content =
                        @Content(
                                mediaType = "application/json",
                                examples =
                                        @ExampleObject(
                                                name = "성공 응답 예시",
                                                value =
                                                        "{\n"
                                                                + "  \"success\": true,\n"
                                                                + "  \"message\": \"식재료 조회에 성공했습니다.\",\n"
                                                                + "  \"data\": [\"양파\", \"대파\", \"당근\"]\n"
                                                                + "}"))),
        @io.swagger.v3.oas.annotations.responses.ApiResponse(
                responseCode = "500",
                description = "서버 내부 오류",
                content =
                        @Content(
                                mediaType = "application/json",
                                examples =
                                        @ExampleObject(
                                                name = "서버 오류 예시",
                                                value =
                                                        "{\n"
                                                                + "  \"success\": false,\n"
                                                                + "  \"message\": \"서버 내부 오류가 발생했습니다.\",\n"
                                                                + "  \"errorCode\": \"INTERNAL_SERVER_ERROR\"\n"
                                                                + "}")))
    })
    @GetMapping
    public ResponseEntity<ApiResponse<List<String>>> findIngredientBy(
            @LoginMember MemberSession member, @RequestParam("keyword") String keyword) {

        List<String> response = ingredientService.getNamesByKeyword(member.storeId(), keyword);

        return ApiResponse.success(INGREDIENT_GET_SUCCESS, response);
    }
}
